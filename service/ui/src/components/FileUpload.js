import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FileUpload() {
  let navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandler = (e) => {
    console.log("change handler");
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmission = () => {
    console.log("handle submission");
    navigate("/response");
    const formData = new FormData();

    formData.append("userfile", selectedFile, selectedFile.name);

    axios
      .post("server/uploadfile", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="fileUpload">
      <h2>채팅 메세지 파일</h2>
      <input type="file" name="file" />
      <button onClick={handleSubmission}>분석 시작</button>
    </div>
  );
}

export default FileUpload;
