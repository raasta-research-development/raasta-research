import Video from "next-video";
import houseView from "/videos/houseView.mp4";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <span className="text-6xl m-10">Raasta Research & Development</span>
      <Video src={houseView} className="max-w-[60vw]" />
    </main>
  );
}
