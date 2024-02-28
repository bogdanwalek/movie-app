const MovieList = (props) => {
    return(
        <>
        {props.movies.map( (movie, index) => (
            <div className="image-container d-flex col">
                <div className="heading d-flex justify-content-center">
                    <h4>{movie.Title}</h4>
                </div>
                <img src={movie.Poster} alt="movie" />
                <div className="overlay d-flex align-items-center
                justify-content-center">

                </div>
            </div>


        ))        
        }
        </>
    )
}

export default MovieList;