import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Search } from "@/components/ui/search";

export function Header({ currentRoute }) {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 fixed top-0 z-50 bg-gray-200 bg-opacity-30 backdrop-blur-md backdrop-filter shadow-lg ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" prefetch={false}>
            <ShirtIcon className="h-6 w-6" />
            <span className="sr-only">ShadCN</span>
          </Link>
          <div className="grid py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold  text-[#98a31f]"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/audio"
              className="flex w-full items-center py-2 text-lg font-semibold text-[#98a31f]"
              prefetch={false}
            >
              Audio
            </Link>
            <Link
              href="/video"
              className="flex w-full items-center py-2 text-lg font-semibold text-[#98a31f]"
              prefetch={false}
            >
              Video
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold text-[#98a31f]"
              prefetch={false}
            >
              Read
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold text-[#98a31f]"
              prefetch={false}
            >
              Live
            </Link>
            <Link
              href="/about"
              className="flex w-full items-center py-2 text-lg font-semibold text-[#98a31f]"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold text-[#98a31f]"
              prefetch={false}
            >
              News
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold text-[#98a31f]"
              prefetch={false}
            >
              Share
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <ShirtIcon className="h-6 w-6" />
        <span className="sr-only">ShadCN</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-2">
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className={`group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                currentRoute === "/"
                  ? "bg-[#98a31f] text-gray-900"
                  : "bg-gray-100 text-[#98a31f] hover:bg-[#98a31f] hover:text-gray-900"
              } duration-500 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50`}
              prefetch={false}
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/audio"
              className={`group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                currentRoute === "/audio"
                  ? "bg-[#98a31f] text-gray-900"
                  : "bg-gray-100 text-[#98a31f] hover:bg-[#98a31f] hover:text-gray-900"
              } duration-500 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50`}
              prefetch={false}
            >
              Audio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/video"
              className={`group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                currentRoute === "/video"
                  ? "bg-[#98a31f] text-gray-900"
                  : "bg-gray-100 text-[#98a31f] hover:bg-[#98a31f] hover:text-gray-900"
              } duration-500 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50`}
              prefetch={false}
            >
              Video
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/read"
              className={`group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                currentRoute === "/read"
                  ? "bg-[#98a31f] text-gray-900"
                  : "bg-gray-100 text-[#98a31f] hover:bg-[#98a31f] hover:text-gray-900"
              } duration-500 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50`}
              prefetch={false}
            >
              Read
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors bg-gray-100 hover:bg-[#98a31f] duration-500 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 text-[#98a31f]"
              prefetch={false}
            >
              Live
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className={`group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                currentRoute === "/about"
                  ? "bg-[#98a31f] text-gray-900"
                  : "bg-gray-100 text-[#98a31f] hover:bg-[#98a31f] hover:text-gray-900"
              } duration-500 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50`}
              prefetch={false}
            >
              About Us
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors bg-gray-100 hover:bg-[#98a31f] duration-500 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 text-[#98a31f]"
              prefetch={false}
            >
              News
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors bg-gray-100 hover:bg-[#98a31f] duration-500 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 text-[#98a31f]"
              prefetch={false}
            >
              Share
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto">
        <Search />
      </div>
    </header>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ShirtIcon(props) {
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
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
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
