import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function Header(): JSX.Element {
  const [navLinks] = useState([
    { to: "/mangalist/createdAt", label: "New manga releases" },
    { to: "/mangalist/rating", label: "Top rated manga" },
    { to: "/mangalist/followedCount", label: "Most popular manga" },
    { to: "/mangalist/latestUploadedChapter", label: "New chapters" },
  ]);
  return (
    <>
      <nav className="bg-blue-900 mb-6 border-b-4 ">
        <div className="flex justify-center items-center container mx-auto py-4">
          <span className="text-white text-4xl font-extrabold font-mono tracking-wide">
            {" "}
            MangaHub
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-center space-x-4 text-white text-lg font-semibold tracking-wide">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:bg-blue-700 px-2 py-1 rounded"
                  aria-label={`Link to ${link.label}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 text-white text-lg font-semibold tracking-wide">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:bg-blue-700 px-2 py-1 rounded"
                  aria-label={`Link to ${link.label}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}
