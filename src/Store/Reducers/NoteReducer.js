import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
 notes:
    {
      number:0,
      size :20,
      sort: {
          sorted:false ,
          unsorted: true,
          empty: true
      },
      totalPages: 0,
      totalElements: 0,
      content: []
  },
  note: {},
  currentNote:{},
  loading: false,
  errors: {},
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NOTE:
      return {...state, currentNote: action.payload};
    case actionTypes.FETCH_NOTES_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_NOTES_SUCCESS:
      return { ...state, notes: action.payload };
    case actionTypes.FETCH_NOTES_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_NOTE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_NOTE_SUCCESS:
      return { ...state, note: action.payload };
    case actionTypes.FETCH_NOTE_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_NOTE:
      return { ...state, note: {} };
    case actionTypes.SAVE_NOTE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_NOTE_SUCCESS:
      return {...state,notes: [...state.notes.content, action.payload],errors: {},loading: false,currentNote:action.payload};
    case actionTypes.SAVE_NOTE_FAILED:
      return {...state,errors: action.payload.data,loading: false};
    case actionTypes.UPDATE_NOTE_REQUESTED: 
      return {...state,loading: true};
    case actionTypes.UPDATE_NOTE_SUCCESS: {
      const note = action.payload;
      return {
        ...state,
        notes: state.notes.content.map((item) =>
          item.id === note.id ? note : item,
         
        ),
        errors: {},
        loading: false,
        currentNote:note
      };
    }
    case actionTypes.UPDATE_NOTE_FAILED: 
      return {...state,errors: action.payload,loading: false};

    case actionTypes.DELETE_NOTE_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        notes: state.notes.content.filter((item) => item.id !== id)
    }
    }
    case actionTypes.DELETE_NOTE_REQUESTED:
        return {...state,loading:true};
    case actionTypes.DELETE_NOTE_FAILED: 
        return {...state,errors:action.payload,loading:false};

    default:
      return state;
  }
};

export default noteReducer;
