import React from "react";
import { AddNoteButton } from "./AddNoteButton";

export const EmptyPlaceholder = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-24">
      <h2>You don't have any note. Add new here!</h2>
      <AddNoteButton></AddNoteButton>
    </div>
  );
};
