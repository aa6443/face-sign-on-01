// App.jsx

import React, { useState } from "react";
import Axios from "axios";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import About from "./components/About.jsx";
import Form from "./components/Form.jsx";
import Integration from "./components/Integration.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "register",
    element: <Registration />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "integration",
    element: <Integration />,
  },
  {
    path: "form",
    element: <Form />,
  },
]);

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [data, setData] = useState("");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const getData = async () => {
    const res = await Axios.post(
      "https://a2xt2utnve-lingering-wind-5756.fly.dev/",
      {
        firstName: "Fred",
        lastName: "Flintstone",
      }
    );
    setData(res.data);
  };

  return (
    // <main>
    //   <div className="App">
    //     {currentForm === "login" ? (
    //       <Login onFormSwitch={toggleForm} onGetData={getData} />
    //     ) : (
    //       <Registration onFormSwitch={toggleForm} onGetData={getData} />
    //     )}
    //     {data && <p>Data: {data}</p>}
    //   </div>
    // </main>

    <RouterProvider router={router} />
  );
}

export default App;
