import { RouteObject } from "react-router-dom";
import App from "./App";
import ErrorPage from "./mangaPages/errorPage";
import { MangaContainer } from "./mangaPages/mangaContainer";
import { MangaDetailsPage } from "./mangaPages/mangaPages";
import { MangaReading } from "./mangaPages/mangaReading";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MangaReading />,
      },
      {
        path: "mangalist/:orderType",
        element: <MangaContainer />,
      },
      {
        path: "manga/:mangaId",
        element: <MangaDetailsPage />,
      },
      {
        path: "manga/chapter/:chapterId",
        element: <MangaReading />,
      },
    ],
  },
];
