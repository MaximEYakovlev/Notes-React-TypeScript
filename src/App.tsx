import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./models/note.model";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with UI/UX Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
