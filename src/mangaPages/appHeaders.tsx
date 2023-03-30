import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function Header(): JSX.Element {
  const [navLinks] = useState([
    { to: "/mangalist/createdAt", label: "New Releases" },
    { to: "/mangalist/rating", label: "Top Rated" },
    { to: "/mangalist/followedCount", label: "Most Popular" },
    { to: "/mangalist/latestUploadedChapter", label: "New Chapters" },
  ]);

  return (
    <>
      <header className="bg-gray-800 mb-6 flex justify-between items-center border-b-4 py-4">
        <Link to="/" className="flex items-center">
          <h1
            className="ml-8 text-gray-300 text-3xl font-bold font-mono tracking-wider"
            aria-label="heading text"
          >
            MangaHub
          </h1>
        </Link>

        <nav className="flex justify-end items-center">
          <ul className="flex items-center space-x-4 text-gray-300 text-lg font-semibold tracking-wide">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="px-4 py-2 rounded hover:bg-gray-700"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}
