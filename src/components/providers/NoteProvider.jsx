"use client";

import { createContext, useState, useEffect } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const noteKey = "notes";
  const historyKey = "histories";

  const [notes, setNotes] = useState([]);
  const [histories, setHistories] = useState([]);

  function addNote(note) {
    const newNotes = [...notes];
    newNotes.forEach((e) => (e.isNew = false));
    /// pengennya kalo note itu ga diisi, nilai defaultnya jadi ini
    /// sedangkan kalo keisi, dia langsung ambil dari props note
    const newNote = {
      title: "",
      date: Date.now(),
      body: "",
      isNew: true,
    };

    console.log(note);

    if (note === undefined) {
      // note langsung masuk dari props
      console.log("newNote");
      newNotes.unshift(newNote);
    } else {
      // note ambil dari newNote
      console.log(`props note`);
      newNotes.unshift(note);
    }
    setNotes(newNotes);
    localStorage.setItem(noteKey, JSON.stringify(newNotes));
    addHistory({ content: "Added a new note" });
  }

  function addHistory({ content, note }) {
    const newHistories = [...histories];
    const newHistory = {
      content: content,
      note: note,
      date: Date.now(),
    };
    newHistories.unshift(newHistory);
    setHistories(newHistories);
    console.log(`add history ${JSON.stringify(newHistory)}`);
    localStorage.setItem(historyKey, JSON.stringify(newHistories));
  }

  function restoreNote(index) {
    addNote(histories[index].note);
    delete histories[index].note;
    setHistories(histories);
    localStorage.setItem(historyKey, JSON.stringify(histories));
  }

  function deleteNote(index) {
    const newNotes = [...notes];
    const deletedNote = newNotes[index];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem(noteKey, JSON.stringify(newNotes));
    addHistory({ content: "Deleted a note", note: deletedNote });
  }

  function changeContent(index, newContent) {
    const newNotes = [...notes];
    newNotes[index].body = newContent;

    setNotes(newNotes);
    localStorage.setItem(noteKey, JSON.stringify(newNotes));
  }

  function changeTitle(index, newContent) {
    const newNotes = [...notes];
    newNotes[index].title = newContent;
    setNotes(newNotes);
    localStorage.setItem(noteKey, JSON.stringify(newNotes));
  }

  useEffect(() => {
    const note = localStorage.getItem(noteKey);
    if (note) {
      setNotes(JSON.parse(note));
      console.log(`notes ${JSON.stringify(note)}`);
    }

    const history = localStorage.getItem(historyKey);
    if (history) {
      setHistories(JSON.parse(history));
      console.log(`history ${JSON.stringify(history)}`);
    }
  }, []);

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        changeContent,
        changeTitle,
        restoreNote,
        histories,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
