import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser, setUserAdded }) {
  const navigate = useNavigate();

  const goHome = () => {
    if (user.username) {
      navigate("/main");
    } else {
      setUser({ username: null });
      setUserAdded("");
      navigate("/");
    }
  };

  const logout = () => {
    setUser({ username: null });
    setUserAdded("");
    navigate("/");
  };

  return (
    <nav>
      <div id="topRight">
        <div className="hamburger" onClick={() => goHome()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      {user.username ? (
        <button className="button2" onClick={() => logout()}>
          로그 아웃
        </button>
      ) : (
        <div></div>
      )}
    </nav>
  );
}

export default Navbar;
