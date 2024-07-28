import { HeaderWrapper } from "@/components/ui/header-wrapper";
import Footer from "@/components/Footer";
import AudioCards from "@/components/AudioCards";

export default function Audio() {
  return (
    <>
      <HeaderWrapper />
      <div className="mt-20">
        <AudioCards />
      </div>
      <Footer />
    </>
  );
}
