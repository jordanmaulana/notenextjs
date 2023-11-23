"use client";

import { NoteCard } from "./NoteCard";
import { EmptyPlaceholder } from "./EmptyPlaceholder";

export const NotePreview = ({ notes }) => {
  if (notes.length === 0) return <EmptyPlaceholder></EmptyPlaceholder>;
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {(notes ?? []).map(({ created, additionalData, content }, index) => {
        return (
          <NoteCard
            key={index}
            date={created}
            title={JSON.parse(additionalData).title}
            content={content}
            index={index}
          />
        );
      })}
    </div>
  );
};
