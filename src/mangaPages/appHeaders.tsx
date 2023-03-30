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
      <nav className="navbar bg-blue-900 mb-6 border-b-4">
        <div className="navbar-start">
          <Link
            to="/"
            className="navbar-brand ml-8 text-white text-4xl font-extrabold font-mono tracking-wide"
          >
            MangaHub
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-menu">
            <ul className="navbar-nav flex space-x-4 text-white text-lg font-semibold tracking-wide">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="nav-link hover:bg-blue-700"
                    aria-label={`Link to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}
