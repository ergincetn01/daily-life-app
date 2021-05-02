import * as actionTypes from "./ActionTypes";

export const openModal = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.OPEN_MODAL, payload });
};

export const closeModal = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.CLOSE_MODAL, payload: false });
};
