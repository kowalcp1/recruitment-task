import styled from "styled-components";
import { useSelector } from "react-redux";

import { ReduxStore } from "../../store/types";

const MovieWrapper = styled.section`
    flex: 1;
`;

const MovieItem = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2em;
    margin: 1em;
    border: 2px solid coral;
    border-radius: 1em;
    background: khaki;
`;

const MovieTitle = styled.h1`
    color: coral;
`;

const MovieDetails = styled.h4`
    color: #ccc;
`

const MovieContainer = () => {
    const { movie } = useSelector((state: ReduxStore) => state.search);

    return (
        movie && movie.Response !== "False" ? <MovieWrapper>
            <MovieItem>
                <div>
                    <MovieTitle>{movie.Title}</MovieTitle>
                    <MovieDetails>Rating: {movie.imdbRating}</MovieDetails>
                    <MovieDetails>Director: {movie.Director}</MovieDetails>
                    <MovieDetails>Actors: {movie.Actors}</MovieDetails>
                    <MovieDetails>Released: {movie.Released}</MovieDetails>
                    {movie.BoxOffice !== "N/A" && <MovieDetails>Box office: {movie.BoxOffice}</MovieDetails>}
                </div>
                <img src={movie.Poster} />
            </MovieItem>
        </MovieWrapper> : null
    );
}

export default MovieContainer;