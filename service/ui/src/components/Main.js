import { useNavigate } from "react-router-dom";
import Chart from "./Chart";
import React, { useState } from "react";

function Main() {
  let navigate = useNavigate();
  let number = 3;

  const viewCam = () => {
    navigate("/camview");
  };

  // const selectYear = (e) => {
  //   setYearChart(null);
  //   setYearChart(`year${yearChart}`);
  //   console.log(yearChart);
  // };

  return (
    <div id="mainCont2">
      <h1>양봉 농가</h1>
      <div id="mainTop">
        <div className="topBox">
          <h3>실시간 바로아 진드기 감염체 수</h3>
          <div className="circle">
            <p id="circleNum">{number}</p>
          </div>
        </div>
        <div className="topBox">
          <h3>바로아 진드기 탐지</h3>
          <button id="viewCam" onClick={() => viewCam()}>
            바로가기
          </button>
        </div>
        <div className="topBox">
          <div>
            <h3>카메라 보기</h3>
            <select className="selectChoice" name="cam_choice" id="cam_choice">
              <option value="Cam_01">Cam_01</option>
              <option value="Cam_02">Cam_02</option>
              <option value="Cam_03">Cam_03</option>
              <option value="Cam_04">Cam_04</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mainChart">
        <div className="selection">
          <label for="years">
            <h3>농가 연도별 감염 현황</h3>
          </label>
          <select
            className="selectChoice"
            name="years"
            id="years"
            // onChange={(e) => selectYear(e)}
          >
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
        <Chart
        //  yearChart={yearChart} setYearChart={setYearChart}
        />
      </div>
    </div>
  );
}

export default Main;
