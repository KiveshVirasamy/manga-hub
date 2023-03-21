import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/errorPage";
import { LandingPage } from "./routes/landing";
import { MangaCardContainer } from "./routes/mangaCard";
import { MangaPage } from "./routes/mangaPages";
import { MangaReader } from "./routes/mangaReading";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg1OuWAwhx7I7vmpCDh-aH9Kv-lKii6lU",
  authDomain: "manga-hub-a2938.firebaseapp.com",
  projectId: "manga-hub-a2938",
  storageBucket: "manga-hub-a2938.appspot.com",
  messagingSenderId: "338510297610",
  appId: "1:338510297610:web:f6be27a097b2ce8cd0fdf3",
  measurementId: "G-55FRGLKBJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
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
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
