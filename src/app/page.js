import { Footer } from "@/components/globals/footer";
import { Header } from "@/components/globals/header";
import { NotePreview } from "@/components/notes/NotePreview";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Header></Header>
      <main>
        <div className="flex">
          <div className="basis-2/3">
            <NotePreview />
          </div>
          <div className="basis-1/3 bg-black"></div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
