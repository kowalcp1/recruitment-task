import styled from "styled-components";
import { Provider } from "react-redux";

import { store } from "./store/createStore";
import Search from "./views/Search/Search";
import MovieContainer from "./views/MovieContainer/MovieContainer";

const Wrapper = styled.div`
    text-align: center;
`;

export const API_KEY = "10925ff4";

function App() {
    return (
        <Provider store={store}>
            <Wrapper>
                <Search />
                <MovieContainer />
            </Wrapper>
        </Provider>
    );
}

export default App;
