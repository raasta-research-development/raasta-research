import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function ArticleCards() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 mt-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Latest Articles
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Grid View
            </Button>
            <Button variant="outline" size="sm">
              List View
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          <article className="bg-background rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/placeholder.svg"
                alt="Article Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Unlocking the Power of React Hooks
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                Discover how React Hooks can simplify your code and improve your
                component&apos;s lifecycle.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </article>
          <article className="bg-background rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/placeholder.svg"
                alt="Article Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Mastering Responsive Design with CSS
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                Learn how to create responsive and mobile-friendly websites
                using the power of CSS.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </article>
          <article className="bg-background rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/placeholder.svg"
                alt="Article Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Optimizing Web Performance with Lazy Loading
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                Improve your website&apos;s speed and user experience by
                implementing lazy loading techniques.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </article>
          <article className="bg-background rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/placeholder.svg"
                alt="Article Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Exploring the Potential of WebAssembly
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                Dive into the world of WebAssembly and learn how it can
                revolutionize web development.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
