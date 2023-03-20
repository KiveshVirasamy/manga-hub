import React from "react";
import { TbListSearch } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

// Declare Header component as a function
export function Header() {
  return (
    <React.Fragment>
      <header className="bg-stone-800 mb-2 flex justify-between content-center border-b-2 border-amber-600">
        <Link to="/">
          <img
            className="w-12 m-0 -my-1"
            src="/src/assets/img/smallLogo.png"
            alt="logo"
          />
        </Link>

        <h1 className="text-amber-500 flex antialiased flex-auto items-center font-mono uppercase font-bold text-3xl">
          <span className="text-lg">Manga-</span>
          <span className="text-lg">Hub</span>
        </h1>

        <nav className="flex justify-center items-center m-2">
          <div className="dropdown dropdown-end dropdown-hover">
            <button className="inline-flex justify-center items-center border border-amber-500 rounded-md shadow-sm px-4 py-2 bg-stone-800 text-amber-500 hover:bg-amber-500 hover:text-white">
              <TbListSearch className="text-3xl mr-2" />
              <span className="text-base font-medium">Search</span>
            </button>
            <ul className="absolute z-10 -ml-4 mt-3 transform px-2 w-64 rounded-md shadow-lg bg-stone-800 text-amber-500">
              <li className="py-2">
                <Link
                  to="/mangalist/createdAt"
                  className="block px-4 py-2 text-base hover:text-white hover:bg-amber-500"
                >
                  New Release
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/mangalist/rating"
                  className="block px-4 py-2 text-base hover:text-white hover:bg-amber-500"
                >
                  Top Rated
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/mangalist/followedCount"
                  className="block px-4 py-2 text-base hover:text-white hover:bg-amber-500"
                >
                  Most Popular
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/mangalist/latestUploadedChapter"
                  className="block px-4 py-2 text-base hover:text-white hover:bg-amber-500"
                >
                  New Chapters
                </Link>
              </li>
            </ul>
          </div>

          <button
            aria-label="Search"
            className="inline-flex justify-center items-center border border-amber-500 rounded-md shadow-sm px-4 py-2 ml-2 bg-stone-800 text-amber-500 hover:bg-amber-500 hover:text-white"
          >
            <TbListSearch className="text-3xl" />
          </button>
        </nav>
      </header>

      <Outlet />
    </React.Fragment>
  );
}
