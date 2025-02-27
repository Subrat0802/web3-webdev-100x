import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { router } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
