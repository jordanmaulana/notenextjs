import { formatDate } from "@/utilities/date-utility";
import React from "react";
import { RotateCcw } from "lucide-react";
import { NoteContext } from "../providers/NoteProvider";
import { useContext } from "react";

export const HistoryCard = ({ date, content, note, index }) => {
  const { restoreNote } = useContext(NoteContext);

  let noteItem = <div></div>;

  if (note !== undefined) {
    noteItem = (
      <div className="flex items-center gap-4">
        <div className="px-4 py-2 bg-blue-300 w-fit rounded-lg mt-2">
          <h2 className="font-semibold p-0">{note.title}</h2>
          <p className="text-xs p-0">{note.body}</p>
        </div>
        <div
          className="flex gap-2 text-white bg-orange-400 py-2 px-4 rounded-md cursor-pointer"
          onClick={() => restoreNote(index)}
        >
          Restore
          <RotateCcw color="white"></RotateCcw>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="text-xs">{formatDate(date)}</div>
      <div>{content}</div>

      {noteItem}
    </div>
  );
};
