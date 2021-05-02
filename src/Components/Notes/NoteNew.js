import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Formik } from "formik";
import NoteForm from "./NoteForm";
import { newNote, saveNote } from "../../Store/Actions/NoteActions";
import { closeModal } from "../../Store/Actions/ModalActions";

function NoteNew(props) {

  const [redirect, setRedirect] = useState(false);

  const initialValues = {
    name: "",
    description: "",
  };
  
  const handleSubmit = (formProps) => {
    const {
      name,
      description
    } = formProps;

    return props
      .saveNote(formProps)
      .then((response) => setRedirect(true))
      .then(props.closeModal())

  };
  return (
    <div className="site-layout-content">
      {redirect ? (
        <Redirect to="/notes-list" />
      ) : (
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {NoteForm}
        </Formik>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  note: state.noteReducer.note,
  errors: state.noteReducer.errors,
  currentNote: state.noteReducer.currentNote,
});

const mapDispatchToProps = {
  newNote,
  saveNote,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteNew);
