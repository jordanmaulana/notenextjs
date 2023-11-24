"use client";

import { useContext, useState, useEffect } from "react";
import { NoteContext } from "../providers/NoteProvider";
import { formatDate } from "@/utilities/date-utility";
import { Calendar, Eraser, Pencil, Save, Star } from "lucide-react";

export const NoteCard = ({ id, date, content, isNew, index }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(content.title);
  const [desc, setDesc] = useState(content.content);

  const { deleteNote, submitNote, updateNote } = useContext(NoteContext);

  useEffect(() => {
    setTitle(content.title);
    setDesc(content.content);

    /// indicates new entry
    if (isNew === true && index === 0) {
      setEditing(true);
    } else {
      setEditing(false);
    }
  }, [content, isNew]);

  async function save() {
    if (!title && !desc) return;
    const body = {
      id: id,
      content: JSON.stringify({
        title: title,
        content: desc,
      }),
      user: "jordanmaulana25@gmail.com",
    };

    if (isNew && index === 0) {
      await submitNote(body);
    } else {
      await updateNote(body);
    }
    setEditing(false);
  }

  return (
    <div className="flex flex-col hover:bg-regal-blue p-4 rounded-lg h-fit text-black shadow-md relative">
      <input
        disabled={!editing}
        id={`title${index}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full  focus:outline-none text-2xl font-bold rounded-lg resize-none bg-transparent mt-4"
        placeholder="Title here"
      ></input>
      <div className="w-fit text-grey text-xs flex gap-2 my-2 items-center">
        <Calendar size={12}></Calendar> {formatDate(date)}
        {isNew ? (
          <div className="px-2 py-1 bg-bold-regal text-white rounded-md ml-2">
            New
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <textarea
        disabled={!editing}
        id={`content${index}`}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full focus:outline-none mt-2  text-sm rounded-lg resize-none bg-transparent flex-1"
        placeholder="Content here"
        rows={6}
      ></textarea>
      <div className="gap-2 absolute bottom-2 right-2 flex">
        <div
          className="p-2 bg-rose-600 rounded-md cursor-pointer"
          onClick={() => {
            deleteNote(index);
            setEditing(false);
          }}
        >
          <Eraser color="white" size={16}></Eraser>
        </div>
        <div
          className="p-2 bg-bold-regal rounded-md  cursor-pointer"
          onClick={() => {
            if (editing) save();
            else setEditing(true);
          }}
        >
          {editing ? (
            <Save color="white" size={16}></Save>
          ) : (
            <Pencil color="white" size={16}></Pencil>
          )}
        </div>
      </div>
    </div>
  );
};
