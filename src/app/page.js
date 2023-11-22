import { Footer } from "@/components/globals/footer";
import { Header } from "@/components/globals/header";
import { NoteHistory } from "@/components/note_history/NoteHistory";
import { NotePreview } from "@/components/notes/NotePreview";

export default function Home() {
  return (
    <div className="flex flex-col max-h-screen">
      <Header></Header>
      <main className="flex flex-1 divide-solid flex-col lg:flex-row divide-x overflow-hidden">
        <div className="basis-2/3 overflow-x-hidden overflow-y-auto">
          <NotePreview />
        </div>
        <div className="basis-1/3 overflow-x-hidden overflow-y-auto">
          <NoteHistory></NoteHistory>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
