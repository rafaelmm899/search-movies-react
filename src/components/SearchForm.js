import React, { Component } from "react";
import { withRouter } from "react-router";
const API_KEY = process.env.REACT_APP_API_KEY;

class SearchForm extends Component {
  state = {
    inputSearch: "",
  };

  _handleOnChange = (e) => {
    this.setState({
      inputSearch: e.target.value,
    });
  };

  _handleOnSubmit = (e) => {
    e.preventDefault();
    const { inputSearch } = this.state;

    if (inputSearch) {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          API_KEY +
          "&query=" +
          this.state.inputSearch
      )
        .then((res) => res.json())
        .then((data) => {
          const { results } = data;

          this.props.onResults(results);
        });
    }
  };

  render() {
    return (
      <form onSubmit={this._handleOnSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this._handleOnChange}
              className="input"
              type="text"
              placeholder="Find a repository"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(SearchForm);
