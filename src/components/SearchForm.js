import React, { Component } from 'react'
import { withRouter } from 'react-router'
const API_KEY = process.env.REACT_APP_API_KEY

class SearchForm extends Component {
  state = {
    inputSearch: '',
  }

  _handleOnChange = (e) => {
    this.setState({
      inputSearch: e.target.value,
    })
  }

  _handleOnSubmit = (e) => {
    e.preventDefault()
    if (this.state.inputSearch !== '') {
      fetch(
        'https://api.themoviedb.org/3/search/movie?api_key=' +
          API_KEY +
          '&query=' +
          this.state.inputSearch
      )
        .then((res) => res.json())
        .then((data) => {
          const { results } = data

          this.props.onResults(results, true)
        })
    } else {
      this.props.onResults([], false)
    }
  }

  clearInput = (e) => {
    this.setState({
      inputSearch: '',
    })
  }

  render() {
    return (
      <form onSubmit={this._handleOnSubmit}>
        <div className="field is-grouped">
          <div className="control">
            <input
              onChange={this._handleOnChange}
              className="input"
              type="text"
              placeholder="Find a repository"
              value={this.state.inputSearch}
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
          <div className="control">
            <button className="button is-info" onClick={this.clearInput}>
              Clear
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(SearchForm)
