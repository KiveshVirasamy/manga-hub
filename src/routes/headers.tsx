import React from "react";
import { TbListSearch } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

// Declare Header component as a function
export function Header() {
  return (
    <React.Fragment>
      <header className="bg-black mb-2 flex justify-between content-center border-b-2 border-amber-600">
        <Link to="/">
          <img
            className="w-0 h-1 m-0 -my-1"
            src="/src/assets/smallLogo.png"
            alt="logo"
          />
        </Link>

        <h1 className="text-yellow-500 flex antialiased flex-auto items-center font-mono uppercase font-bold text-3xl">
          <span className="text-lg text-yellow-500">Manga-</span>
          <span className="text-lg text-yellow-500">Hub</span>
        </h1>

        <nav className="flex justify-center items-center m-2">
          <div>
            <ul
              className="text-sm text-yellow-400"
              style={{ listStyle: "none", margin: 0, padding: 0 }}
            >
              <li
                className="text-lg px-2 py-1 m-2 hover:bg-black rounded"
                style={{ display: "inline-block" }}
              >
                <Link to="/mangalist/createdAt">New Release</Link>
              </li>
              <li
                className="text-lg px-2 py-1 m-2 hover:bg-black rounded"
                style={{ display: "inline-block" }}
              >
                <Link to="/mangalist/rating">Top Rated</Link>
              </li>
              <li
                className="text-lg px-2 py-1 m-2 hover:bg-black rounded"
                style={{ display: "inline-block" }}
              >
                <Link to="/mangalist/followedCount">Most Popular</Link>
              </li>
              <li
                className="text-lg px-2 py-1 m-2 hover:bg-black rounded"
                style={{ display: "inline-block" }}
              >
                <Link to="/mangalist/latestUploadedChapter">New Chapters</Link>
              </li>
            </ul>
          </div>

          <button
            aria-label="Search"
            className="inline-flex justify-center items-center border border-amber-500 rounded-md shadow-sm px-4 py-2 ml-2 bg-black text-yellow-500 hover:bg-amber-500 hover:text-white"
          >
            <TbListSearch className="text-3xl" />
          </button>
        </nav>
      </header>

      <Outlet />
    </React.Fragment>
  );
}
