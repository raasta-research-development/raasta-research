import React from "react";
import ImageCarousel from "@/components/Carousel";
import Image from "next/image";
import AboutOptions from "@/components/AboutOptions";

function About() {
  const imageUrls = [
    "/images/c1.webp",
    "/images/c2.webp",
    "/images/c3.webp",
    "/images/c4.webp",
    "/images/c5.webp",
  ];

  return (
    <div className="mt-28 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/aboutlogo.png"
          alt="News and Updates"
          width={170}
          height={170}
          className=""
        />
        <Image src="/images/raasta.png" alt="logo" width="520" height="520" />
      </div>

      <ImageCarousel imageUrls={imageUrls} />

      <div className="pt-6 mt-16 text-justify lg:text-center mx-auto md:ml-72 bg-white md:w-3/5 px-4 md:px-0 ">
        <span className="text-lg">
          <strong className="text-xl">Hello Global Community,</strong>
          <br />
          Were Raasta Research and Development, embarking on an exciting journey
          to explore various facets of global sustainable development. In our
          dedicated quest, we&apos;re not only uncovering a wealth of knowledge
          available around the world but also ensuring it&apos;s freely
          accessible to everyone. Our goal is to bridge the gap in understanding
          nature and its resources, cultivating global awareness that encourages
          conscientious choices for a harmonious environment. Recognizing the
          intricate nature of sustainability, which varies across regions, we
          emphasize the need for tailored plans instead of a universal approach.
          This involves respecting the unique characteristics, challenges, and
          opportunities in each area. Our commitment extends to spotlighting the
          dedicated efforts of individuals and organizations worldwide
          tirelessly working towards sustainability. Through our platform, we
          aim to be a hub of information, connecting regional initiatives with
          global awareness. By sharing insights into sustainable development
          projects worldwide, we strive to contribute to a shared understanding
          and promotion of responsible and enduring practices.
        </span>
        <br></br>
      </div>

      <div className="relative flex flex-col lg:items-center lg:flex-row mt-10 w-full px-4 lg:ml-60">
        <Image
          src="/images/saveearth.png"
          width={450}
          height={450}
          alt="Picture of the author"
          className="md:absolute md:left-20 mb-4 md:mb-0"
        />

        <video
          className="overflow-hidden w-full md:w-[800px] h-auto md:h-[500px] lg:ml-96"
          autoPlay
          loop
          muted
        >
          <source src="/images/earthloop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-4/6">
          <AboutOptions />
        </div>
      </div>

      {/* <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="ml-auto mt-40 mr-auto md:ml-28 md:mr-0 max-w-7xl"
      >
        <CarouselContent className="max-h-96 h-96">
          {imageUrls.map((url, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image
                      src={url}
                      alt={`Image ${index + 1}`}
                      width={800}
                      height={800}
                      className="object-cover h-full w-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

      <div className="mt-20 mb-20 flex flex-col md:flex-row items-center gap-8 md:gap-20 mx-auto md:w-3/5 md:px-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl leading-tight font-bold">
          Why Raasta?
        </h1>
        <p className="text-base text-justify md:text-lg leading-relaxed">
          In a world dealing with a range of environmental issues, it is crucial
          to have thorough information on sustainable development from diverse
          environmental, geographical, economical, and cultural perspectives.
          Recognizing that sustainability is not a one-size-fits-all concept.
          Each environment, geography, economy, and culture presents unique
          challenges, opportunities, and solutions. Through the exploration of
          global information, we gain an elaborate understanding of the diverse
          approaches to sustainability. This knowledge empowers us to tailor
          strategies that consider local contexts, ensuring the effectiveness of
          initiatives. Creating awareness worldwide is crucial because it
          fosters a collective understanding of the global interconnectedness of
          sustainable practices. It inspires collaboration, allowing the global
          population to learn from each other, adopt successful models, and
          collectively work towards a more sustainable and resilient future. In
          essence, the need to gather and share this information globally is
          essential for fostering a united front in the global pursuit of
          sustainability.
        </p>
      </div>
    </div>
  );
}

export default About;
