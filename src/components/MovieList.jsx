const MovieList = (props) => {
    return(
        <>
            {props.movies.map( (movie, index) => (
                <div className="image-container d-flex col">
                    <img src={movie.Poster} alt="movie" />
                </div>
            ))}
        </>
    )
}

export default MovieList;