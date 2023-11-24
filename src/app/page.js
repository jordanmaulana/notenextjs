import { Footer } from "@/components/globals/footer";
import { Header } from "@/components/globals/header";
import { NoteHistory } from "@/components/note_history/NoteHistory";
import { NotePreview } from "@/components/notes/NotePreview";

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Header></Header>
      <main className="flex flex-1 divide-solid flex-col lg:flex-row divide-x overflow-hidden">
        <div className="flex-1 basis-2/3 overflow-x-hidden overflow-y-auto ">
          <NotePreview />
        </div>
        <div className="flex-1 basis-1/3 overflow-x-hidden overflow-y-auto">
          <NoteHistory></NoteHistory>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
