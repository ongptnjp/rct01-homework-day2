import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from "./Fave";

class FilmRow extends Component {
  handleDetailClick = () => {
    console.log("fetching detail");
  }
  render() {
    const year = new Date(this.props.film.release_date).getFullYear();
    return(
      <div className="film-row" onClick={ this.handleDetailClick }>
        <FilmPoster posterPath={this.props.film.poster_path} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
          <Fave />
        </div>
      </div>
    )
  }
}

export default FilmRow;