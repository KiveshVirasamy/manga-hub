import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterMangaProps } from "../mangaProps/filterMangaProps";

export const FilterManga = (props: FilterMangaProps): JSX.Element => {
  const { value, onChange } = props;

  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
    onChange!(event);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`./filter/${filterValue}`);
  };

  return (
    <div className="bg-blue-800 border-white-600 rounded-full m-4 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex items-center p-2">
        <input
          className="w-full px-2 py-1 text-gray-300 text-sm border-none bg-transparent focus:outline-none"
          id="filter"
          name="filter"
          placeholder="Filter manga"
          value={value}
          onChange={handleInputChange}
          aria-label="Filter manga"
        />
      </form>
    </div>
  );
};
