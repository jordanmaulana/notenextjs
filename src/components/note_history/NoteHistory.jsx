"use client";

import { useContext } from "react";
import { NoteContext } from "@/components/providers/NoteProvider";
import { HistoryCard } from "./HistoryCard";

export const NoteHistory = () => {
  const { histories } = useContext(NoteContext);

  return (
    <div className="px-4 max-h-screen overflow-hidden">
      History
      {(histories ?? []).map(({ date, content, note }, index) => {
        return (
          <HistoryCard
            key={index}
            date={date}
            content={content}
            note={note}
            index={index}
          ></HistoryCard>
        );
      })}
    </div>
  );
};
