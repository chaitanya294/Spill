import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyBlog from "./Pages/MyBlog.jsx";
import WriteBlog from "./Pages/WriteBlog.jsx";
import Home from "./Pages/Home.jsx";
import EditBlog from './Pages/EditBlog.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element : <Home />
  },
  {
    path: "/create",
    element : <WriteBlog/>
  },
  {
    path : "/edit",
    element : <MyBlog/>
  },
  {
    path : "/editBlog",
    element : <EditBlog />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
