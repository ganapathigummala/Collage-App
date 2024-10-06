import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body"; // Fixed import
import Home from "./JsxFolders/Home"; // Fixed import
import About from "./JsxFolders/About";

import Administration from "./JsxFolders/Administration";


import Facilities from "./JsxFolders/Facilities";


import Student from "./JsxFolders/Student";

import Certification from "./JsxFolders/Certification";
import Contacts from "./JsxFolders/Contacts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [ // Changed to lowercase "children"
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'administration',
          element: <Administration />
        },
        {
          path: 'facilities',
          element: <Facilities />
        },
        {
          path: 'student',
          element: <Student />
        },
        {
          path: 'certification', // Fixed typo from 'certificartification' to 'certification'
          element: <Certification />
        },
        {
          path: 'contacts',
          element: <Contacts />
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
