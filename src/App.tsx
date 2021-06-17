import React from "react";
import "./App.css";
import Logout from "./components/Body/Logout";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return <div className="app">{user ? <Logout /> : <Login />}</div>;
}

export default App;
