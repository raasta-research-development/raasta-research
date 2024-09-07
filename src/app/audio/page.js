import { HeaderWrapper } from "@/components/ui/header-wrapper";
import Footer from "@/components/Footer";
import AudioCards from "@/components/AudioCards";
import RelatedContents from "@/components/RelatedContent";

export default function Audio() {
  return (
    <>
      <HeaderWrapper />
      <div className="mt-20 p-5">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#98a31f] mb-5">
          Audio & Podcasts For You!
        </h1>
        <AudioCards />
      </div>
      <RelatedContents />
      <Footer />
    </>
  );
}
