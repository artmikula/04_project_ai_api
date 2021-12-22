import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="App">
      <navbar>
        <div class="hamburger">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <h1>아이티지</h1>
      </navbar>
      <div className="mainCont">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/upload" element={<FileUpload />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
