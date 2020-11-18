import React from 'react'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const ratingColor = (rating) => {
    if (rating >= 8) {
        return "green";
    }
    else if (rating >= 6) {
        return "yellow";
    } else {
        return "red";
    }
};

function Movie({overview, poster_path, title, vote_average, release_date}) {
    return (
        <div className='movie'>
            <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} alt={title} />
            <div className='movie-rating'>
                <span className={`tag ${ratingColor(vote_average)}`}>
                <StarTwoToneIcon className='icon'/> {vote_average}
                </span>
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
            </div>

            <div className="movie-desc">
                <h2>Overview</h2>
                <p>{overview}</p>
                <strong><p>Released: {release_date}</p></strong>
            </div>
            
        </div>
    )
}

export default Movie;
