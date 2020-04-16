import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.number,
    avg: PropTypes.number,
  }

  render() {
    const { title, poster, id } = this.props
    return (
      <div className="card-wrapper">
        <Link to={'/detail/' + id} className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img alt={title} src={poster} />
            </figure>
          </div>
        </Link>
      </div>
    )
  }
}
