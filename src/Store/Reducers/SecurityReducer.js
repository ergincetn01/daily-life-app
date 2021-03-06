import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  validToken: false,
  user: {}
  };
  
const booleanActionPayload = payload => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};
  const securityReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_CURRENT_USER:
        return { ...state,  validToken: booleanActionPayload(action.payload),
          user: action.payload };
         
     
      default:
        return state;
    }
  };
  
  export default securityReducer;