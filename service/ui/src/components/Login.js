import React from "react";
import userIcon from "./user_icon.png";

function Login() {
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
            // onClick={(e) => loginHandler(e)}
          />
          <input
            className="button2"
            type="button"
            value="가입하기"
            // onClick={(e) => signUpUser(e)}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
