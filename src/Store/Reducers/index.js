import { combineReducers } from "redux";
import modalReducer from "./ModalReducer";
import UserReducer from "./UserReducer";
import SecurityReducer from "./SecurityReducer";
//import reducers here.

const rootReducer = combineReducers({
    modals: modalReducer,
    security: SecurityReducer,
    UserReducer,
    
  
});

export default rootReducer;