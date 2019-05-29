import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export class MoviesList extends Component {
    static propTypes = {
        movies : PropTypes.array
    }

    render(){
        const { movies } = this.props  

        return (
            <div className="MoviesList columns is-mobile">
                {
                    movies.map(movie => {
                        return <div key={movie.id} className="
                            MoviesList-item 
                            column 
                            is-one-fifth-desktop 
                            is-full-mobile 
                            is-one-quarter-tablet
                            is-one-fifth-widescreen
                            is-one-fifth-fullhd">
                            <Movie
                                title={movie.original_title}
                                year={movie.release_date}
                                poster={'https://image.tmdb.org/t/p/original'+movie.poster_path}
                                id={movie.id}
                            />
                        </div>
                    })
                }
            </div>
        );
    }
}