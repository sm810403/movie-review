import React from 'react'
import './Movie.css'
function Movie({id,rating,title,year,poster,summary}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="text-box">
                <h3 className="movie-title">{title}</h3>
                <h5 className="movie-year">{year}</h5>
                <h5 className="movie-rating" style={{color:"red"}}>{rating}</h5>
                <p className="movie-summary">{summary.slice(0,180)}...</p>
            </div>
        </div>
    )
}

export default Movie