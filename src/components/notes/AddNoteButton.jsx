import React from "react";

import { Plus } from "lucide-react";
import { NoteContext } from "../providers/NoteProvider";
import { useContext } from "react";

export const AddNoteButton = () => {
  const { addNote } = useContext(NoteContext);

  return (
    <div
      className="flex w-fit items-center gap-4 bg-bold-regal py-2 px-4 rounded-lg text-white cursor-pointer"
      onClick={addNote}
    >
      New Note
      <Plus color="white" />
    </div>
  );
};
