import { Input } from "@/components/ui/input";
import { HiOutlineSearch } from "react-icons/hi";

export function Search() {
  return (
    <div className="flex items-center border border-black bg-white rounded-md w-full px-2 gap-2">
      <HiOutlineSearch className="scale-125" />
      <Input
        type="text"
        placeholder="Search Raasta Research"
        className="flex-grow text-gray-900 border-none placeholder:text-gray-500"
      />
    </div>
  );
}
