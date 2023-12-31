import { formatDate } from "@/utilities/date-utility";
import React from "react";
import { RotateCcw } from "lucide-react";
import { NoteContext } from "../providers/NoteProvider";
import { useContext } from "react";

export const HistoryCard = ({ date, content, note, index }) => {
  const { restoreNote } = useContext(NoteContext);

  let noteItem = <div></div>;

  if (note !== undefined) {
    const bodyContent = JSON.parse(note.content);
    noteItem = (
      <div className="flex flex-col gap-4 w-80 m-4 p-4 bg-red rounded-lg">
        <h2 className="font-semibold">{bodyContent.title}</h2>
        <p className="text-xs">{bodyContent.content}</p>
        <div
          className="flex gap-2 underline cursor-pointer items-center text-xs mt-4 self-end"
          onClick={() => restoreNote(index)}
        >
          Restore
          <RotateCcw size={12}></RotateCcw>
        </div>
      </div>
    );
  }

  return (
    <div className="py-2">
      <div className="text-xs flex gap-1 italic">
        <div>{formatDate(date)}</div>
        <div>{`- ${content}`}</div>
      </div>

      {noteItem}
    </div>
  );
};
