"use client";

import Link from "next/link";
import React from "react";
import { AddNoteButton } from "../notes/AddNoteButton";

export const Header = () => {
  return (
    <header className="bg-regal-blue p-4 flex justify-between">
      <Link href="/">
        <span className="text-2xl font-semibold">Note</span>{" "}
        <span className="font-semibold">app by Jordan.</span>
      </Link>
      <AddNoteButton></AddNoteButton>
    </header>
  );
};
