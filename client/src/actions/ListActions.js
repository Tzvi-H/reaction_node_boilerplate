import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST }
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list: list };
}

export function createList(list, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(list, data => {
      dispatch(createListSuccess(data));

      if (callback) {
        callback();
      }
    });
  };
}

export function updateList(id, updatedListProperties, callback) {
  return function(dispatch) {
    apiClient.updateList(id, updatedListProperties, data => {
      dispatch(updateListSuccess(data));
      if (callback) {
        callback();
      }
    });
  };
}