// @ts-ignore
import { promiseMiddleware } from '@adobe/redux-saga-promise'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from "redux-devtools-extension";

import search from './reducers/search';
import { searchSaga } from "./sagas/search/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        search
    }),
    composeWithDevTools(applyMiddleware(
        promiseMiddleware,
        sagaMiddleware
    ))
);

function* saga() {
    yield all([
        ...searchSaga
    ]);
}

sagaMiddleware.run(saga);
