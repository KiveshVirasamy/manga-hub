import { RouteObject } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/errorPage";
import { MangaCardContainer } from "./routes/mangaContainer";
import { MangaPage } from "./routes/mangaPages";
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
        element: <MangaCardContainer />,
      },
      {
        path: "mangalist/:orderType",
        element: <MangaCardContainer />,
      },
      {
        path: "manga/:mangaId",
        element: <MangaPage />,
      },
      {
        path: "manga/chapter/:chapterId",
        element: <MangaReading />,
      },
    ],
  },
];
