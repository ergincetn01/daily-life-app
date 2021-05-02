import * as actionTypes from "./ActionTypes";
import axios from "../../Utils/DailyLifeApi";


export const changeNote=(note)=>dispatch=>{
    dispatch({type:actionTypes.CHANGE_NOTE,payload:note});
}

export const fetchNotes=(page,size)=>async dispatch=>{
  dispatch({type:actionTypes.FETCH_NOTES_REQUESTED});
  try{

   let url=`/notes/pagination?page=${page}&size=${size}`;
    const response = await axios.get(url);
    dispatch({type:actionTypes.FETCH_NOTES_SUCCESS,payload:response.data});
  }
  catch
  {
    dispatch({type:actionTypes.FETCH_NOTES_FAILED});
  }
}

export const fetchNote=(id)=>async dispatch=>{
  dispatch({type:actionTypes.FETCH_NOTE_REQUESTED});
  try{
    const response = await axios.get(`/notes/${id}`);
    dispatch({type:actionTypes.FETCH_NOTE_SUCCESS,payload:response.data});
  }
  catch
  {
    dispatch({type:actionTypes.FETCH_NOTE_FAILED});
  }
}

export const newNote=()=>async dispatch=>
{
  dispatch({type:actionTypes.NEW_NOTE})
}

export const saveNote=(note)=>async dispatch=>{
  dispatch({type:actionTypes.SAVE_NOTE_REQUESTED});
  try{
    const response = await axios.post(`/notes`,note);
    dispatch({type:actionTypes.SAVE_NOTE_SUCCESS,payload:response.data});
  }
  catch
  {
    dispatch({type:actionTypes.SAVE_NOTE_FAILED});
  }
}


export const updateNote=(note)=>async dispatch=>{
  dispatch({type:actionTypes.UPDATE_NOTE_REQUESTED});
  try{
    await axios.put(`/notes/${note.id}`,note);
    dispatch({type:actionTypes.UPDATE_NOTE_SUCCESS,payload:note});
  }
  catch
  {
    dispatch({type:actionTypes.UPDATE_NOTE_FAILED});
  }
}

export const deleteNote=(id)=>async dispatch=>{
  dispatch({type:actionTypes.DELETE_NOTE_REQUESTED});
  try{
    await axios.delete(`/notes/${id}`);
    dispatch({type:actionTypes.DELETE_NOTE_SUCCESS,payload:id});
  }
  catch
  {
    dispatch({type:actionTypes.DELETE_NOTE_FAILED});
  }
}
