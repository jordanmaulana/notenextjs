"use client";

import { useContext } from "react";
import { NoteContext } from "../providers/NoteProvider";
import { NoteCard } from "./NoteCard";
import { EmptyPlaceholder } from "./EmptyPlaceholder";

export const NotePreview = () => {
  const { notes } = useContext(NoteContext);

  if (notes.length === 0) return <EmptyPlaceholder></EmptyPlaceholder>;
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {(notes ?? []).map(({ date, title, body, isNew }, index) => {
        return (
          <NoteCard
            key={index}
            date={date}
            title={title}
            content={body}
            isNew={isNew}
            index={index}
          />
        );
      })}
    </div>
  );
};
