import React from 'react'
// import PropTypes from 'prop-types'
function Movie({id,rating,title,year,poster,summary}) {
    // const imgs = medium_cover_image
    return (
        <div>
            <img src={poster} alt={title} title={title} />
            <div className="movie-title">{title}</div>
            <div className="movie-year">{year}</div>
            <div className="movie-rating">{rating}</div>
            <div className="movie-summary">{summary}</div>
        </div>
    )
}
// Movie.propTypes = {
//     rating: PropTypes.number.isRequired,
// }

export default Movie