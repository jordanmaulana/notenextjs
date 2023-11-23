import { Footer } from "@/components/globals/footer";
import { Header } from "@/components/globals/header";
import { NoteHistory } from "@/components/note_history/NoteHistory";
import { NotePreview } from "@/components/notes/NotePreview";

async function getNotes() {
  const res = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='jordanmaulana25@gmail.com')",
    { cache: "no-store" }
  );
  const data = await res.json();
  console.log(JSON.stringify(data));
  return data;
}

export default async function Page() {
  const { items } = await getNotes();
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Header></Header>
      <main className="flex flex-1 divide-solid flex-col lg:flex-row divide-x overflow-hidden">
        <div className="flex-1 basis-2/3 overflow-x-hidden overflow-y-auto ">
          <NotePreview notes={items} />
        </div>
        <div className="flex-1 basis-1/3 overflow-x-hidden overflow-y-auto">
          <NoteHistory></NoteHistory>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
