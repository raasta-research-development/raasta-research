import { HeaderWrapper } from "@/components/ui/header-wrapper";
import VideoCards from "@/components/VideoCards";

export default function Video() {
  return (
    <>
      <HeaderWrapper />
      <div className="mt-20 p-5">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#98a31f] mb-5">
          Videos For You!
        </h1>
        <VideoCards />
      </div>
    </>
  );
}
