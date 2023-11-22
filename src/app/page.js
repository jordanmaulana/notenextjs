import { Footer } from "@/components/globals/footer";
import { Header } from "@/components/globals/header";
import { NoteHistory } from "@/components/note_history/NoteHistory";
import { NotePreview } from "@/components/notes/NotePreview";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main className="flex-1 py-16 overflow-y-scroll">
        <div className="flex divide-x divide-solid">
          <div className="basis-2/3">
            <NotePreview />
          </div>
          <div className="basis-1/3 ">
            <NoteHistory></NoteHistory>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
