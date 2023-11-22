"use client";

import { useContext, useState } from "react";
import { NoteContext } from "../providers/NoteProvider";

export const NoteCard = ({ content, index }) => {
  const { deleteNote, changeContent } = useContext(NoteContext);

  return (
    <div>
      <textarea
        id={index}
        value={content}
        onChange={(e) => changeContent(index, e.target.value)}
        className="w-fit text-black focus:outline-none p-4 text-xs rounded-lg resize-none shadow-md"
        rows={6}
        placeholder="Write here .."
      ></textarea>
      <button
        className="bg-rose-500 text-white text-xs font-medium rounded-lg p-2"
        onClick={() => deleteNote(index)}
      >
        Delete
      </button>
    </div>
  );
};
