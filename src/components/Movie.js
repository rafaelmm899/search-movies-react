import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.number,
    avg: PropTypes.number,
  }

  render() {
    const { title, poster, year, id, avg } = this.props
    return (
      <div className="card-wrapper">
        <Link to={'/detail/' + id} className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img alt={title} src={poster} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{parseInt(year)}</p>
                <Rating avg={avg} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
