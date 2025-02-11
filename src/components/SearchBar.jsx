import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="input flex justify-center relative">
        <input
          type="text"
          placeholder="Product Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white placeholder-gray-400 rounded-xl px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black"
        />
        {search && (
          <IoCloseCircleOutline
            className="absolute top-2 right-1.5 text-2xl cursor-pointer"
            onClick={() => setSearch("")}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
