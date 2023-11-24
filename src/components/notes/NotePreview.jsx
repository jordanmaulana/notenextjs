"use client";

import { NoteCard } from "./NoteCard";
import { EmptyPlaceholder } from "./EmptyPlaceholder";

import { NoteContext } from "../providers/NoteProvider";
import { useContext } from "react";

export const NotePreview = () => {
  const { notes } = useContext(NoteContext);

  if (notes.length === 0) return <EmptyPlaceholder></EmptyPlaceholder>;
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {(notes ?? []).map(
        ({ id, created, additionalData, content, isNew }, index) => {
          return (
            <NoteCard
              key={index}
              id={id}
              date={created}
              isFavorite={additionalData}
              content={content !== undefined ? JSON.parse(content) : undefined}
              index={index}
              isNew={isNew}
            />
          );
        }
      )}
    </div>
  );
};
