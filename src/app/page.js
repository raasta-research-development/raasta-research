import Image from "next/image";
import { Search } from "@/components/ui/search";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { HeaderWrapper } from "@/components/ui/header-wrapper";
import Footer from "@/components/Footer";
import AuthForm from "@/components/ui/auth-form";

const ImageCard = ({ src, alt }) => (
  <Image src={src} alt={alt} height={500} width={500} className="rounded-2xl" />
);

export default function Home() {
  const BannerImages = [
    { src: "/card1.jpg", alt: "card 1" },
    { src: "/card2.jpg", alt: "card 2" },
    { src: "/card3.jpg", alt: "card 3" },
    { src: "/card4.jpg", alt: "card 4" },
  ];

  return (
    <main>
      <HeaderWrapper />
      <div className="w-full h-32 sm:h-72 mt-20 relative">
        <Image
          src="/banner.jpg"
          fill
          alt="banner"
          className="object-cover"
          priority
        />
      </div>
      <div className="justify-center w-full mt-8 sm:flex hidden">
        <div className="w-full max-w-xl px-4">
          <Search />
        </div>
      </div>
      <div className="text-center text-balance my-8 flex flex-col items-center">
        <Link
          href="https://www.hindustantimes.com/cities/delhi-news/delhi-water-crisis-atishi-begins-fast-for-more-water-from-haryana-101718957813136.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            Summer of &apos;24: India&apos;s heatwave
            <br />
            turns deadly with over 100 deaths, 40,000 suspected heatstroke cases
          </span>
        </Link>
        <BsThreeDots className="w-12 h-8" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mx-6 sm:mx-14 mb-8">
        {BannerImages.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <AuthForm />
      <Footer />
    </main>
  );
}
