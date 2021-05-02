import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Button } from "antd";
import { changeNote, deleteNote } from "../../Store/Actions/NoteActions";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
import { closeModal } from "../../Store/Actions/ModalActions";

function NoteDelete(props) {
  const [redirect, setRedirect] = useState(false);

  const removeNote = (id) => {
    props.deleteNote(id).then((response) => setRedirect(true));
  };

  const note = props.currentNote;
  if (!props.currentNote) {
    return <div>Loading...</div>;
  }
  return (
    <div className="site-layout-content">
      <>
        {redirect ? (
          <Redirect to="/notes-list" />
        ) : (
          <div>
            <ExclamationCircleTwoTone style={{ fontSize: 30 }} />
            <p style={{ fontSize: 17 }}>
              Are you sure you want to delete '{note.name}' note log?
            </p>
            <Button
              size="large"
              onClick={() => props.closeModal()}
              style={{ backgroundColor: "red", color: "white" }}
            >
              No
            </Button>
            <Button
              size="large"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => {
                removeNote(note.id);
                props.closeModal();
              }}
            >
              Yes
            </Button>
          </div>
        )}
      </>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentNote: state.noteReducer.currentNote,
});

const mapDispatchToProps = {
  changeNote,
  deleteNote,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteDelete);
