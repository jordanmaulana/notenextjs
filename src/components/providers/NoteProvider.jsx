"use client";

import { createContext, useState, useEffect } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [history, setHistory] = useState([]);

  function addNote() {
    const newNotes = [...notes];
    const newNote = {
      title: "",
      date: Date.now(),
      body: "",
    };
    newNotes.push(newNote);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function deleteNote(index) {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function changeContent(index, newContent) {
    const newNotes = [...notes];
    newNotes[index].body = newContent;

    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function changeTitle(index, newContent) {
    const newNotes = [...notes];
    newNotes[index].title = newContent;
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      const currentNotes = JSON.parse(data);
      setNotes(currentNotes);
    }
  }, []);

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, changeContent, changeTitle }}
    >
      {children}
    </NoteContext.Provider>
  );
};
