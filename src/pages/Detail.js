import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { Header } from '../components/Header';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Detail extends Component {
    static PropsTypes = {
        match: PropsTypes.shape({
            params: PropsTypes.object,
            isExact: PropsTypes.bool,
            path:PropsTypes.string,
            url:PropsTypes.string
        })
    }

    state = {
        movie: {}
    }

    _fetchMovies({ id }){
        console.log(process.env);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
                .then(movie => {
                    console.log(movie);
                    this.setState({
                        movie
                    })
                });
    }

    _renderGenres =() => {
        const { genres } = this.state.movie;
        
        if(genres){
            return genres.map((genre) => {
                return (
                    <span key={genre.id} className="tag">{genre.name}</span>
                )
            })
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params
        this._fetchMovies({id});
    }
    
    render(){
        const {
            title, 
            poster_path, 
            release_date,
            tagline,
            overview,
            vote_average
        } = this.state.movie
        
        return (
            <div>
                <Header
                    rightItems={
                        [{
                            href: '/',
                            title : 'volver'
                        }]
                    }
                />
                <div className="container">
                    <div className="notification black-notification">
                        <div className="columns">
                            <div className="column is-4">
                                <figure className="image is-square">
                                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                                </figure>
                            </div>
                            <div className="column">
                                <h1 className="title is-1">{title}</h1>
                                <h2 className="subtitle">{tagline}</h2>
                                <div className="columns">
                                    <div className="column is-6">
                                        <div className="tags has-addons">
                                            <span className="tag is-primary">{ release_date ? parseInt(release_date) : '' }</span>
                                            { this._renderGenres() }
                                        </div>
                                    </div>
                                    <div className="column is-6">
                                        <div className="field is-grouped is-grouped-multiline" style={{float:'right'}}>
                                            <div className="control">
                                                <div className="tags has-addons">
                                                    <span className="tag ">rating</span>
                                                    <span className="tag is-info">{vote_average}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section>
                                    {overview}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}