// @ts-ignore
import { createPromiseAction } from "@adobe/redux-saga-promise";

import * as ActionTypes from './actionTypes';
import { Movie } from "../../reducers/search";

export const searchByName = (payload: { searchText: string }) => createPromiseAction(ActionTypes.SearchByName.Trigger)(payload);
export const searchByNameSucceeded = (payload: Movie) => ({
    type: ActionTypes.SearchByName.Succeeded,
    payload
});
