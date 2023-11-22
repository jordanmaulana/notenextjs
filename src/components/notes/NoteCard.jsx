"use client";

import { useContext, useState } from "react";
import { NoteContext } from "../providers/NoteProvider";
import { NewLabel } from "./NewLabel";
import { formatDate } from "@/utilities/date-utility";
import { Calendar } from "lucide-react";

export const NoteCard = ({ date, title, content, isNew, index }) => {
  const { deleteNote, changeContent, changeTitle } = useContext(NoteContext);

  return (
    <div className="flex flex-col hover:bg-regal-blue p-4 rounded-lg h-fit text-black shadow-md relative">
      <input
        id={`title${index}`}
        value={title}
        onChange={(e) => changeTitle(index, e.target.value)}
        className="w-full  focus:outline-none text-2xl font-bold rounded-lg resize-none bg-transparent mt-4"
        placeholder="Title here"
      ></input>
      <div className="w-fit text-grey text-xs flex gap-2 my-2">
        <Calendar size={12}></Calendar> {formatDate(date)}
      </div>
      <textarea
        id={`content${index}`}
        value={content}
        onChange={(e) => changeContent(index, e.target.value)}
        className="w-full focus:outline-none mt-2  text-sm rounded-lg resize-none bg-transparent flex-1"
        placeholder="Content here"
        rows={6}
      ></textarea>
      <p
        className="text-rose-600 text-xs font-medium rounded-lg py-2 px-4 mt-8 w-fit underline cursor-pointer absolute bottom-0 right-0"
        onClick={() => deleteNote(index)}
      >
        Delete
      </p>
    </div>
  );

  return (
    <div className="flex flex-col hover:bg-regal-blue p-4 rounded-lg h-fit shadow-lg">
      <div className="flex gap-4">
        <div className="bg-bold-regal rounded-md w-fit py-1 px-2 text-white text-xs">
          {formatDate(date)}
        </div>
        <NewLabel isNew={isNew}></NewLabel>
      </div>
      <input
        id={`title${index}`}
        value={title}
        onChange={(e) => changeTitle(index, e.target.value)}
        className="w-full text-black focus:outline-none text-2xl font-bold rounded-lg resize-none bg-transparent mt-4"
        placeholder="Title here"
      ></input>
      <textarea
        id={`content${index}`}
        value={content}
        onChange={(e) => changeContent(index, e.target.value)}
        className="w-full text-black focus:outline-none mt-2  text-sm rounded-lg resize-none bg-transparent"
        placeholder="Content here"
        rows={6}
      ></textarea>
      <button
        className="border-2 border-rose-500 text-white text-xs font-medium rounded-lg py-2 px-4 mt-8 w-fit bg-rose-500"
        onClick={() => deleteNote(index)}
      >
        Delete
      </button>
    </div>
  );
};
