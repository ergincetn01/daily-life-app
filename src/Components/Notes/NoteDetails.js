import React from "react";
import { connect } from "react-redux";
import { Row, Divider } from "antd";
import { changeNote, deleteNote } from "../../Store/Actions/NoteActions";
import ReactHtmlParser from "react-html-parser";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { openModal } from "../../Store/Actions/ModalActions";

const style = { padding: "8px" };
const dividerBold = {
  fontWeight: "bold",
  borderColor: "black",
};

function NoteDetails(props) {
  const selectNote = (note) => {
    props.changeNote(note);
  };

  const note = props.currentNote;
  if (!props.currentNote) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Row gutter={16} justify="end">
          <div style={style}>
            <EditTwoTone
              style={{ fontSize: 25 }}
              onClick={() => {
                selectNote(note);
                props.openModal({ modalType: "NoteEditModal" });
              }}
            />
          </div>
          <div style={style}>
            <DeleteTwoTone
              twoToneColor="red"
              style={{
                fontSize: 25,
              }}
              onClick={() => {
                selectNote(note);
                props.openModal({ modalType: "NoteDeleteModal" });
              }}
            />
          </div>
        </Row>
      </div>

      <div>
        <Divider style={dividerBold} orientation="left">
          Description
        </Divider>
        {ReactHtmlParser(note.description)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentNote: state.noteReducer.currentNote,
});

const mapDispatchToProps = {
  changeNote,
  deleteNote,
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);
