import * as ActionTypes from '../../actions/search/actionTypes';

export interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface SearchReducer {
    movie: Movie | null;
}

export const initialState: SearchReducer = {
    movie: null
};

export default (state = initialState, { type, ...action }: any) => {
    switch (type) {
        case ActionTypes.SearchByName.Succeeded: {
            const movie = action.payload;
            return {
                ...state,
                movie
            };
        }
        default:
            return state;
    }
}
