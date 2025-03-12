const MovieList = (props) => {
    return (
        <>
        {props.movies.map( (movie, index) => ( 
            <div className="image-container col mb-4">
                <div className="row text-center">
                    <div className="heading">
                        <h4>{movie.Title}</h4>
                    </div>
                    <img className="img-fluid text-center" 
                    src={movie.Poster} alt="movie" />
                    <div className="overlay d-flex align-items-center
                    justify-content-center">    
                    </div>
                </div>
            </div>
        ))

        }
        </>
    )
}

export default MovieList;