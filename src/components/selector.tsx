import React from "react";
import { TbListSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

export function DropDownSelector(): JSX.Element {
  return (
    <>
      <button
        className="bg-transparent focus:outline-none"
        type="button"
        aria-haspopup="true"
        aria-controls="dropdown"
        id="dropdownDefaultButton"
      >
        <TbListSearch className="text-yellow-400 text-3xl w-full h-full font-bold px-2 pb-[1px]" />
      </button>

      <div
        className="z-10 hidden bg-black divide-y divide-yellow-400 rounded-b-lg shadow w-44 border-x-2 border-b-2 border-yellow-600"
        aria-labelledby="dropdownDefaultButton"
        id="dropdown"
      >
        <ul className="text-sm text-yellow-400">
          <li className="text-lg px-2 py-1 m-2 hover:bg-black rounded">
            <Link to="/mangalist/createdAt">New Release</Link>
          </li>
          <li className="text-lg px-2 py-1 m-2 hover:bg-black rounded">
            <Link to="/mangalist/rating">Top Rated</Link>
          </li>
          <li className="text-lg px-2 py-1 m-2 hover:bg-black rounded">
            <Link to="/mangalist/followedCount">Most Popular</Link>
          </li>
          <li className="text-lg px-2 py-1 m-2 hover:bg-black rounded">
            <Link to="/mangalist/latestUploadedChapter">New Chapters</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
