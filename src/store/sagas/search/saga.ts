// @ts-ignore
import { rejectPromiseAction, resolvePromiseAction } from '@adobe/redux-saga-promise';
import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_KEY } from '../../../App';
import * as actions from '../../actions';
import * as ActionTypes from '../../actions/search/actionTypes';

// @ts-ignore
export function* searchByName(action) {
    const { searchText } = action.payload;
    try {
        const resp: AxiosResponse<any> = yield axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchText}`);
        yield put(actions.searchByNameSucceeded(resp.data));
        yield call(resolvePromiseAction, action)
    } catch (err) {
        yield call(rejectPromiseAction, action);
    }
}

export const searchSaga = [
    takeLatest(ActionTypes.SearchByName.PromiseTrigger, searchByName)
];
