import React, { Component } from 'react'
import { MoviesList } from '../components/MoviesList'
import { Header } from '../components/Header'
import SearchForm from '../components/SearchForm'
import ReactPaginate from 'react-paginate'
const API_KEY = process.env.REACT_APP_API_KEY

export class Home extends Component {
  state = {
    results: [],
    searchParameter: '',
    page: 0,
    totalResults: 1,
    totalPages: 1,
  }

  _handleResults = (query) => {
    this.setState({
      searchParameter: query,
    })
    console.log(this.state)
  }

  _searchData = (searchPath) => {
    fetch(searchPath)
      .then((res) => res.json())
      .then((data) => {
        const { results, page, total_results, total_pages } = data

        this.setState({
          results,
          searchParameter: '',
          page,
          totalResults: total_results,
          totalPages: total_pages,
        })
      })
  }

  handlePageClick = ({ selected }) => {
    let pageSelected = selected + 1

    this._searchData(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageSelected}`
    )
  }

  componentDidMount() {
    console.log(this.state)
    /*this._searchData(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${this.state.page}`
    )*/
  }

  renderResult = (e) => {
    return this.state.results.length === 0 ? (
      <p>There are no results</p>
    ) : (
      <MoviesList movies={this.state.results} />
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header rightContent={<SearchForm onResults={this._handleResults} />} />
        <div className="container">{this.renderResult()}</div>
        <nav className={'pagination'}>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakClassName={'hidden'}
            breakLinkClassName={'hidden'}
            pageCount={this.state.totalPages}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            itemsCountPerPage={20}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination-list-custom'}
            activeClassName={'active'}
            previousClassName={'previous round'}
            nextClassName={'next round'}
            pageClassName={'hidden'}
            initialPage={this.state.page}
          />
        </nav>
      </React.Fragment>
    )
  }
}
