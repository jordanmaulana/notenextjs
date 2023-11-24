"use client";

import { createContext, useState, useEffect } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const historyKey = "histories";

  const [notes, setNotes] = useState([]);

  const [histories, setHistories] = useState([]);

  /// variabel biar user ga spam tombol add note
  const [newNoteAvailable, setNewNoteAvailable] = useState(true);

  function addNote() {
    if (!newNoteAvailable) return;
    /// ketika user baru tambah note, disable tombol add note.
    setNewNoteAvailable(false);

    const newNotes = [...notes];
    newNotes.forEach((e) => (e.isNew = false));

    const newNote = {
      content: JSON.stringify({
        title: "",
        content: "",
      }),
      created: Date.now(),
      isNew: true,
    };
    newNotes.unshift(newNote);
    setNotes(newNotes);
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
    localStorage.setItem(historyKey, JSON.stringify(newHistories));
  }

  function restoreNote(index) {
    submitNote(histories[index].note);
    delete histories[index].note;
    setHistories(histories);
    localStorage.setItem(historyKey, JSON.stringify(histories));
    addHistory({ content: "Restored a note" });
  }

  useEffect(() => {
    getNotes();

    // for debugging purpose
    // localStorage.setItem(historyKey, JSON.stringify([]));

    const history = localStorage.getItem(historyKey);
    if (history) {
      setHistories(JSON.parse(history));
      console.log(`history ${JSON.stringify(history)}`);
    }
  }, []);

  async function getNotes() {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='jordanmaulana25@gmail.com')",
      { cache: "no-store" }
    );
    const data = await res.json();
    setNotes(data.items);
  }

  async function submitNote(body) {
    setNewNoteAvailable(true);

    console.log("submit newnote");

    await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    addHistory({ content: "Added a new note" });
    getNotes();
  }

  async function deleteNote(index) {
    setNewNoteAvailable(true);
    if (!notes[index].id) {
      notes.splice(index, 1);
      setNotes(notes);
      return;
    }

    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${notes[index].id}`,
      {
        method: "DELETE",
      }
    );
    addHistory({
      content: `Deleted a note - ${notes[index].id}`,
      note: notes[index],
    });

    getNotes();
  }

  async function updateNote(body) {
    setNewNoteAvailable(true);

    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${body.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    addHistory({ content: `Updated a note - ${body.id}` });
    getNotes();
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        restoreNote,
        histories,
        submitNote,
        updateNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
