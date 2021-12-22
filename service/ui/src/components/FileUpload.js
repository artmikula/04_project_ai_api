import React from "react";

function FileUpload() {
  return (
    <div>
      <h1>채팅 메세지 파일</h1>
      <label htmlFor="fileInput">파일 선택</label>
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        value="파일 선택"
      ></input>
    </div>
  );
}

export default FileUpload;
