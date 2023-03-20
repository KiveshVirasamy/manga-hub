import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./routes/headers";
import { MangaCardContainer } from "./routes/mangaCard";
import { MangaPage } from "./routes/mangaPages";

/**
 * The QueryClient instance used to make queries
 */
const queryClient = new QueryClient();

/**
 * The configuration object for the BrowserRouter
 */
const routerConfig = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "mangalist/:orderType",
        element: <MangaCardContainer />,
      },
      {
        path: "manga/:mangaId",
        element: <MangaPage />,
      },
    ],
  },
];

/**
 * The BrowserRouter instance
 */
const router = createBrowserRouter(routerConfig);

/**
 * The root component of the application
 */
const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

/**
 * Render the application to the root element in the DOM
 */
ReactDOM.render(<App />, document.getElementById("root"));
