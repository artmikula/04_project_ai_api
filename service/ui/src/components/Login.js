import React from "react";
import userIcon from "./user_icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ error, setError, setPage, setUser, userAdded, setUserAdded }) {
  let navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  let pwdCheck = null;

  const signUpUser = (e) => {
    e.preventDefault();
    setError(null);
    navigate("/signup");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginUser();
    navigate("/response");
  };

  async function loginUser() {
    setError("");
    if (loginInfo.password && loginInfo.username) {
      await checkPassword(loginInfo);
      console.log("pass await");
      if (loginInfo.password === pwdCheck) {
        setUser({
          username: loginInfo.name,
        });
        console.log("user set");
        setError(null);
        setPage("selection");
        setUserAdded("User added");
      } else {
        setError("Incorrect password");
        console.log("wrong login");
        setUserAdded("");
      }
    } else {
      setError("Enter username and password");
    }
  }

  async function checkPassword() {
    await axios.get(`/server/users/${loginInfo.username}`).then((response) => {
      if (response.data[0].password) {
        pwdCheck = response.data[0].password;
      }
    });
  }

  return (
    <div className="login">
      <div className="top">
        <img src={userIcon} alt="user_icon" id="userIcon" />
      </div>
      <div className="bottom">
        <form id="loginform" autoComplete="off">
          {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
          {/* {userAdded !== "" ? <div className="message">{userAdded}</div> : ""} */}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="ID"
            // onChange={(e) =>
            //   setLoginInfo({ ...loginInfo, username: e.target.value })
            // }
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            // onChange={(e) =>
            //   setLoginInfo({ ...loginInfo, password: e.target.value })
            // }
          />
          <input
            className="button2"
            type="button"
            value="로그인"
            onClick={(e) => loginHandler(e)}
          />
          <input
            className="button2"
            type="button"
            value="가입하기"
            onClick={(e) => signUpUser(e)}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
