import * as actionTypes from "../Actions/ActionTypes";

const initialState = false;

const modalReducer =(state = initialState, { type, payload })=> {
  switch (type) {
    case actionTypes.OPEN_MODAL:
      const { modalType, modalProps } = payload;
      return { modalType, modalProps };
    case actionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}
export default modalReducer;