import { RouteObject } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/errorPage";
import { MangaContainer } from "./routes/mangaContainer";
import { MangaDetailsPage } from "./routes/mangaPages";
import { MangaReading } from "./routes/mangaReading";

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
        path: "search/:searchValue",
        element: <MangaContainer />,
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
