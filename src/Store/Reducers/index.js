import { combineReducers } from "redux";
import modalReducer from "./ModalReducer";
//import reducers here.

const rootReducer = combineReducers({
    modals: modalReducer,
  
});

export default rootReducer;