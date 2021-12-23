import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ error, setError, setUser, userAdded }) {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  let navigate = useNavigate();
  let pwdCheck = null;

  const signUpUser = (e) => {
    e.preventDefault();
    setError(null);
    navigate("/signup");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    // navigate("/main");
    loginUser();
  };

  async function loginUser() {
    setError("");
    if (loginInfo.password && loginInfo.username) {
      await checkPassword();
      if (loginInfo.password === pwdCheck) {
        setUser({
          username: loginInfo.username,
        });
        setError(null);
        navigate("/main");
      } else {
        setError("Incorrect password");
      }
    } else {
      setError("Enter username and password");
    }
  }

  async function checkPassword() {
    await axios.get(`/server/users/${loginInfo.username}`).then((response) => {
      if (response.data.length > 0) {
        pwdCheck = response.data[0].password;
      } else {
        setError("Wrong password");
      }
    });
  }

  return (
    <div className="login">
      <h1>로그인</h1>
      {error !== "" ? <div className="error">{error}</div> : ""}
      {userAdded !== "" ? <div className="message">{userAdded}</div> : ""}
      <div id="box1">
        <form id="loginform" autoComplete="off">
          <label>아이디</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="아이디 입력"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, username: e.target.value })
            }
          />
          <label>패스워드</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="패스워드 입력"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
        </form>
      </div>
      <div className="buttons">
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
      </div>
      <div className="info">
        <p>Copyright Thinkforbl, All Rights Reserved</p>
        <a href="/">개인 정보 보호 정책</a>
        <p>Ver 2.0</p>
      </div>
    </div>
  );
}

export default Login;
