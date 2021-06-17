import React from "react";
import { logout, selectUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "./User.css";

function Logout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e: any) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        I'm <span className="Logout__name">{user.name}</span>
      </h1>
      <button className="logout__button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
