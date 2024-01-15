import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  AboutSite,
  CreativeFrame,
  Home,
  Login,
  OtherProjects,
  Projects,
  Skills,
  Upload,
} from "./components/index.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/creativeframe",
        element: <CreativeFrame />,
      },
      {
        path: "/aboutsite",
        element: <AboutSite />,
      },
      {
        path: "/projects/:name",
        element: <OtherProjects />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
