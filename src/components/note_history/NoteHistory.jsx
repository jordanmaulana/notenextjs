"use client";

import { useContext } from "react";
import { NoteContext } from "@/components/providers/NoteProvider";
import { HistoryCard } from "./HistoryCard";

export const NoteHistory = () => {
  const { histories } = useContext(NoteContext);

  return (
    <div className="p-4">
      <h3 className="font-semibold">History</h3>
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
