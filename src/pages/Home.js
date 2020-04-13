import React, { Component } from "react";
import { MoviesList } from "../components/MoviesList";
import { Header } from "../components/Header";
import SearchForm from "../components/SearchForm";
const API_KEY = process.env.REACT_APP_API_KEY;

export class Home extends Component {
  state = {
    results: [],
    userSearch: false,
  };

  _handleResults = (data) => {
    this.setState({
      userSearch: true,
      results: data,
    });
  };

  _searchData = (searchPath) => {
    fetch(searchPath)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        console.log(data);
        this.setState({
          results,
        });
      });
  };

  componentDidMount() {
    this._searchData(
      "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY
    );
  }

  renderResult = (e) => {
    return this.state.results.length === 0 ? (
<<<<<<< HEAD
      <p>no results</p>
=======
      <p>There are no results</p>
>>>>>>> fix translation
    ) : (
      <MoviesList movies={this.state.results} />
    );
  };

  render() {
    return (
      <div>
        <Header>
          <SearchForm onResults={this._handleResults} />
        </Header>
        <div>{this.renderResult()}</div>
      </div>
    );
  }
}
