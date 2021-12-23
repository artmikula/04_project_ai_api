import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import CameraView from "./components/CameraView";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

function App() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ username: null });
  const [resultData, setResultData] = useState(null);
  const [userAdded, setUserAdded] = useState(null);
  const login = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          user={user}
          setUser={setUser}
          setUserAdded={setUserAdded}
          login={login}
        />
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
            <Route path="/main" element={<Main />}></Route>
            <Route
              path="/camview"
              element={<CameraView setError={setError} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
