import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { SearchMangaProps } from "../mangaProps/searchMangaProps";

export const MangaSearch = (props: SearchMangaProps): JSX.Element => {
  const { value, onChange } = props;

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onChange!(event);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`./search/${searchValue}`);
  };

  return (
    <div className="bg-blue-900 border-white-600 rounded-full m-4 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex items-center p-2">
        <input
          className="w-full px-2 py-1 text-gray-300 text-sm border-none bg-transparent focus:outline-none"
          id="search"
          name="search"
          placeholder="Search manga"
          value={value}
          onChange={handleInputChange}
        />
        <button
          className="text-2xl text-center text-white ml-2"
          type="submit"
          disabled={!searchValue}
          aria-label="search-button"
        >
          <IoIosSearch className="m-auto" />
        </button>
      </form>
    </div>
  );
};
