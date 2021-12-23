import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage({ error, setError, userAdded, setUserAdded }) {
  let usernameExists = false;
  let navigate = useNavigate();

  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    rePassword: "",
  });

  const cancelSignup = (e) => {
    setError(null);
    setUserAdded(null);
    console.log("cancel signup");
    navigate("/");
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    setError(null);
    signUpNewUser();
  };

  async function signUpNewUser() {
    if (
      newUserData.username &&
      newUserData.password === newUserData.rePassword
    ) {
      await checkUserExists();
      if (usernameExists === true) {
        setError("Username not available");
      } else {
        setError(null);
        addUser();
        setUserAdded("New user added");
        console.log("Added user");
      }
    } else {
      setError("wrong username/password");
    }
  }

  async function checkUserExists() {
    await axios
      .get(`/server/users/${newUserData.username}`)
      .then((response) => {
        if (response.data.length > 0) {
          usernameExists = true;
        }
      });
  }

  const addUser = () => {
    axios.post("/server/adduser", newUserData).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="login">
      <h1>가입하기</h1>
      {error !== "" ? <div className="error">{error}</div> : ""}
      {userAdded !== "" ? <div className="message">{userAdded}</div> : ""}
      <div id="box2">
        <form id="loginform" autoComplete="off">
          <label>아이디</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="아이디 입력"
            onChange={(e) =>
              setNewUserData({ ...newUserData, username: e.target.value })
            }
          />
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호 입력"
            onChange={(e) =>
              setNewUserData({ ...newUserData, password: e.target.value })
            }
          />
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            placeholder="비밀번호 확인"
            onChange={(e) =>
              setNewUserData({ ...newUserData, rePassword: e.target.value })
            }
          />
        </form>
      </div>
      <div className="buttons">
        <input
          className="button2"
          type="button"
          value="가입하기"
          onClick={(e) => signUpHandler(e)}
        />
        <input
          className="button2"
          type="button"
          value="취소"
          onClick={(e) => cancelSignup(e)}
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

export default SignupPage;
