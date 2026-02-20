import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirects base URL to signup */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export { App };
/*import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import Home from "./Home.jsx";
import Task1 from "./Task1/Task1.jsx";
import Task2 from "./Task2/Task2.jsx";
import Task21 from "./Task2/Task2(1).jsx";
import Array_map from "./Task3/Array_map.jsx";
import Array_filter from "./Task3/Array_filter.jsx";
import Array_map_image from "./Task3/Array_map_image.jsx";
import Array_map_image_info from "./Task3/Array_map_image_info.jsx";
import Task3 from "./Task3/Task3.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact1 from "./Contact1.jsx";
import Navbarr from "./Navbarr.jsx";
import { createContext } from "react";
import T1 from "./Task5/T1.jsx";
import T2 from "./Task5/T2.jsx";
import Change_image from "./Task5/Change_image.jsx";
import Change_style from "./Task5/Change_style.jsx";
import Use_Effect from "./Task5/Use_Effect.jsx";
import Task5 from "./Task5/Task5.jsx";
import Task5_ex from "./Task5/Task5_ex.jsx";
import Alert from "./Task5/Alert.jsx";
import Event from "./Task5/Event.jsx";
import Goal from "./Task5/Goal.jsx";
import EvenNum from "./Task5/EvenNum.jsx";
import Ternary from "./Task5/Ternary.jsx";
import Temp from "./Temp.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
export const UserContext = createContext();

function App() {
  // const [count, setCount] = useState(0)d
  // const String = "MANSI"
  const str = "";

  return (
    <>
      <Router>
        {/* <Navbar /> */

//<UserContext.Provider value={str}>
{
  /* <h1>{`Hello ${str}!`}</h1> */
}
//<Routes>
// <Route path="/" element={<Navigate to="/login" />} />
// <Route path="/signup" element={<Signup />} />
//<Route path="/login" element={<Login />} />
//<Route path="/posts" element={<Dashboard />} />

{
  /* <Route path="/" element={<Task3 />} /> */
}
{
  /* <Route path="/menu" element={<Menu />} /> */
}
{
  /* <Route path="/contact" element={<Contact1 />} /> */
}
{
  /* <Route path="*" element={<h1> PAGE NOT FOUND</h1>} /> */
}
//</Routes>
//</UserContext.Provider>
//</Router>

{
  /* <Home str="ABC" />
      <Home str="Helloooooo" />
      <Home str="How are you???" /> */
}
{
  /* <Home name='Mansi Darji' age='21' /> */
}
{
  /* <Task1 /> */
}
{
  /* <Task2 /> */
}
{
  /* <Task21 /> */
}
{
  /* <Array_map /> */
}
{
  /* <Array_filter /> */
}
{
  /* <Array_map_image /> */
}
{
  /* <Array_map_image_info /> */
}
{
  /* <Task3 /> */
}
{
  /* <Navbarr /> */
}
{
  /* <T1 /> */
}
{
  /* <T2 /> */
}
{
  /* <Change_image /> */
}
{
  /* <Change_style /> */
}
{
  /* <Use_Effect /> */
}
{
  /* <Task5 /> */
}
{
  /* <Task5_ex /> */
}
{
  /* <Alert /> */
}
{
  /* <Event /> */
}
{
  /* <Goal isMatch={false} /> */
}
{
  /* <EvenNum /> */
}
{
  /* <Ternary /> */
}
{
  /* <Temp /> */
}
{
  /* <Signup/> */
}
{
  /* <Login/> */
}
{
  /* <Dashboard/> */
}
// </>
// );
//}

//export { App };
