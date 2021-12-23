import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar({ user, setUser, setUserAdded, login }) {
  const navigate = useNavigate();
  const logout = () => {
    setUser({ username: null });
    setUserAdded("");
    navigate("/");
  };

  return (
    <nav>
      <div id="topRight">
        <div className="hamburger" onClick={() => logout()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {login ? <h1>채팅 메시지 분석 음식 추천</h1> : <h1>아이티지</h1>}
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
