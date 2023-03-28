import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="bg-gray-800 mb-6 flex justify-between items-center border-b-4 py-4">
        <Link to="/" className="flex items-center"></Link>

        <h1
          className="ml-8 text-gray-300 text-3xl font-bold font-mono tracking-wider"
          aria-label="heading text"
        >
          MangaHub
        </h1>

        <nav className="flex justify-end items-center">
          <ul className="flex items-center space-x-4 text-gray-300 text-lg font-semibold tracking-wide">
            <li>
              <Link
                to="/mangalist/createdAt"
                className="px-4 py-2 rounded hover:bg-gray-700"
                aria-label="New Releases"
              >
                New Releases
              </Link>
            </li>
            <li>
              <Link
                to="/mangalist/rating"
                className="px-4 py-2 rounded hover:bg-gray-700"
                aria-label="Top Rated"
              >
                Top Rated
              </Link>
            </li>
            <li>
              <Link
                to="/mangalist/followedCount"
                className="px-4 py-2 rounded hover:bg-gray-700"
                aria-label="Most Popular"
              >
                Most Popular
              </Link>
            </li>
            <li>
              <Link
                to="/mangalist/latestUploadedChapter"
                className="px-4 py-2 rounded hover:bg-gray-700"
                aria-label="New Chapters"
              >
                New Chapters
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
