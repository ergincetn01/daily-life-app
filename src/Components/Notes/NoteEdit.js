import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Formik } from "formik";
import NoteForm from "./NoteForm";
import { updateNote } from "../../Store/Actions/NoteActions";
import { closeModal } from "../../Store/Actions/ModalActions";

function NoteEdit(props) {
  const [redirect, setRedirect] = useState(false);

  const note = props.currentNote;
  if (!props.currentNote) {
    return <div>Loading...</div>;
  }

  const formValues = {
    id: note.id,
    name: note.name,
    description: note.description,
  };

  const submit = (note) => {
    return props
      .updateNote(note)
      .then((response) => setRedirect(true))
      .catch((error) => {
        console.error(error);
      })
      .then(props.closeModal());
  };

  return (
    <div className="site-layout-content">
      {redirect ? (
        <Redirect to="/notes-list" />
      ) : (
        <Formik initialValues={formValues} onSubmit={submit}>
          {NoteForm}
        </Formik>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentNote: state.noteReducer.currentNote,
});

const mapDispatchToProps = {
  updateNote,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteEdit);
