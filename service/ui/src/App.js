import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import FileUpload from "./components/FileUpload";
import Response from "./components/Response";
import Signup from "./components/Signup";
import Error from "./components/Error";

function App() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ username: null });
  const [resultData, setResultData] = useState(null);
  const [page, setPage] = useState("login");
  const [userAdded, setUserAdded] = useState(null);
  const login = false;

  const logout = () => {
    setUser({ username: null });
    setUserAdded("");
    console.log("logged out");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div id="topRight">
            <div className="hamburger">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            {login ? <h1>채팅 메시지 분석 음식 추천</h1> : <h1>아이티지</h1>}
          </div>
          <button className="button2" onClick={logout}>
            로그 아웃
          </button>
        </nav>
        <div className="mainCont">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Login
                  error={error}
                  setError={setError}
                  setUser={setUser}
                  userAdded={userAdded}
                  setUserAdded={setUserAdded}
                />
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <Signup
                  error={error}
                  setError={setError}
                  userAdded={userAdded}
                  setUserAdded={setUserAdded}
                  setResultData={setResultData}
                />
              }
            ></Route>
            <Route path="/error" element={<Error />} />
            <Route path="/upload" element={<FileUpload />}></Route>
            <Route
              path="/response"
              element={<Response setError={setError} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
