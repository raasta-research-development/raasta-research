// app/video/[id]/page.js
import { HeaderWrapper } from "@/components/ui/header-wrapper";
import VideoPlayer from "@/components/VideoPlayer";

export default function VideoPage({ params }) {
  return (
    <>
      <HeaderWrapper />
      <div className="mt-20 p-5">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#98a31f] mb-5">
          Video Player
        </h1>
        <VideoPlayer id={params.id} />
      </div>
    </>
  );
}
