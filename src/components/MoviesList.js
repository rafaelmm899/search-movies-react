import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  }

  render() {
    const { movies } = this.props

    return (
      <div className="MoviesList columns is-mobile">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="is-one-quarter column">
              <Movie
                title={movie.original_title}
                year={movie.release_date}
                poster={
                  'https://image.tmdb.org/t/p/original' + movie.poster_path
                }
                id={movie.id}
                avg={movie.vote_average / 2}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
