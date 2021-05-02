import React, { useEffect } from "react";
import { connect } from "react-redux";
import { List, Pagination, Collapse, Row, Col } from "antd";
import { CaretRightOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import {
  changeNote,
  fetchNotes,
  deleteNote,
} from "../../Store/Actions/NoteActions";
import NoteDetails from "./NoteDetails";
import { openModal } from "../../Store/Actions/ModalActions";

const { Panel } = Collapse;

function NoteList(props) {

  useEffect(() => {
  function updateNoteList(){
    props.fetchNotes(0,15);
  };

  updateNoteList();
  },)

  const handleChange = (value) => {
    if (value) props.fetchNotes(value - 1, 10);
  };

  const notes = props.notes;
  const selectNote = (note) => {
    props.changeNote(note);
  };
  const note = props.currentNote;
  if (!props.currentNote) {
    return <div>Loading...</div>;
  }
  return (
    <div className="site-layout-content">
      <Row>
        <Col>
          <u>
            <h1>Note List</h1>
          </u>
        </Col>
      </Row>
      <div>
        <PlusCircleTwoTone
          twoToneColor="blue"
          style={{ fontSize: 35 }}
          onClick={() => props.openModal({ modalType: "NewNoteModal" })}
        />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={notes.content}
        renderItem={(item) => (
          <List.Item>
            <Collapse
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              style={{ color: "white", backgroundColor: "lightblue" }}
              onChange={() => selectNote(item)}
            >
              <Panel
                style={{ width: "1310px" }}
                header={"ID:  " + item.id + " " + "- Name: " + item.name}
              >
                <NoteDetails />
              </Panel>
            </Collapse>
          </List.Item>
        )}
      />
      <Pagination
        defaultCurrent={1}
        total={notes.totalElements}
        onChange={handleChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.noteReducer.notes,
  currentNote: state.noteReducer.currentNote,
});

const mapDispatchToProps = {
  changeNote,
  fetchNotes,
  deleteNote,
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
