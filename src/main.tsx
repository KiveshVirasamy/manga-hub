import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/errorPage";
import { MangaCardContainer } from "./routes/mangaCard";
import { MangaPage } from "./routes/mangaPages";
import { MangaReader } from "./routes/mangaReading";

const queryClient = new QueryClient();

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MangaReader />,
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
        element: <MangaReader />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRoute} />
    </QueryClientProvider>
  </React.StrictMode>
);
