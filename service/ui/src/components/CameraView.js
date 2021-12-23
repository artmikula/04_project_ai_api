import React from "react";

function CameraView() {
  return (
    <div>
      <div className="camCont">
        <div className="camMenu">
          <h3>홈돌아가기</h3>
          <select
            className="selectChoice"
            name="cam_choice"
            id="cam_choice"
            // onChange={(e) => selectYear(e)}
          >
            <option value="Cam_01">Cam_01</option>
            <option value="Cam_02">Cam_02</option>
            <option value="Cam_03">Cam_03</option>
            <option value="Cam_04">Cam_04</option>
          </select>
        </div>
        <div className="camView">
          <div className="camVideoView"></div>
        </div>
      </div>
    </div>
  );
}

export default CameraView;
