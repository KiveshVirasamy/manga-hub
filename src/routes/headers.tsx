import React from "react";
import { Link, Outlet } from "react-router-dom";
import SearchManga from "../components/searchManga";

// Declare Header component as a function
export function Header() {
  return (
    <React.Fragment>
      <header
        className="bg-black mb-2 flex justify-between content-center border-b-2 border-yellow-600"
        style={{ border: "yellow" }}
      >
        <Link to="/">
          <img
            className="w-0 h-1 m-0 -my-1"
            src="/src/assets/smallLogo.png"
            alt="logo"
          />
        </Link>

        <h1 className="text-yellow-500 flex antialiased flex-auto items-center font-mono uppercase font-bold text-3xl">
          <span className="text-lg text-yellow-500" style={{ color: "yellow" }}>
            Manga-
          </span>
          <span className="text-lg text-yellow-500" style={{ color: "yellow" }}>
            Hub
          </span>
        </h1>

        <nav className="flex justify-center items-center m-2">
          <div>
            <ul
              className="text-sm text-yellow-400"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                color: "yellow",
              }}
            >
              <li className="m-4 flex h-6 w-fit items-center justify-center overflow-hidden rounded-md bg-neutral-100 text-black my-auto -mt-1 h-7 w-3/4 border-none bg-neutral-100 py-0 px-1 text-xs text-black">
                <SearchManga></SearchManga>
              </li>
              <li
                className="text-lg text-yellow-400 px-2 py-1 m-2 hover:bg-black rounded"
                style={{ display: "inline-block", color: "yellow" }}
              >
                <Link to="/mangalist/createdAt">New Release</Link>
              </li>
              <li
                className="text-lg text-yellow-400 px-2 py-1 m-2 hover:bg-black rounded"
                style={{ display: "inline-block", color: "yellow" }}
              >
                <Link to="/mangalist/rating">Top Rated</Link>
              </li>
              <li
                className="text-lg text-yellow-400 px-2 py-1 m-2 hover:bg-black rounded"
                style={{ display: "inline-block", color: "yellow" }}
              >
                <Link to="/mangalist/followedCount">Most Popular</Link>
              </li>
              <li
                className="text-lg text-yellow-400 px-2 py-1 m-2 hover:bg-black rounded"
                style={{ display: "inline-block", color: "yellow" }}
              >
                <Link to="/mangalist/latestUploadedChapter">New Chapters</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Outlet />
    </React.Fragment>
  );
}
