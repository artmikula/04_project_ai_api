import React from "react";
import arrow from "./arrow.png";
import img_alt from "./img_alt.png";
import { useNavigate } from "react-router-dom";

function Response({ setError }) {
  let navigate = useNavigate();

  const newFile = (e) => {
    e.preventDefault();
    setError(null);
    navigate("/upload");
  };

  return (
    <div id="response">
      <h1>채팅 메세지 음식주제 채팅 목록</h1>
      <div className="tables">
        <div id="table1">
          <table className="GeneratedTable">
            <thead>
              <tr>
                <th>날짜</th>
                <th>메시지</th>
                <th>음식 주제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021-02-17 07:57</td>
                <td>역시 주 4일 할만하다</td>
                <td>None</td>
              </tr>
              <tr>
                <td>2021-02-17 07:57</td>
                <td>역시 주 4일 할만하다</td>
                <td>None</td>
              </tr>
              <tr>
                <td>2021-02-17 08:12</td>
                <td>뭔 4그램에 4만원이여</td>
                <td>카페/디저트</td>
              </tr>
              <tr>
                <td>2021-02-17 07:57</td>
                <td>역시 주 4일 할만하다</td>
                <td>None</td>
              </tr>
              <tr>
                <td>2021-02-17 07:57</td>
                <td>역시 주 4일 할만하다</td>
                <td>None</td>
              </tr>
              <tr>
                <td>2021-02-17 08:12</td>
                <td>뭔 4그램에 4만원이여</td>
                <td>카페/디저트</td>
              </tr>
              <tr>
                <td>2021-02-17 07:57</td>
                <td>역시 주 4일 할만하다</td>
                <td>None</td>
              </tr>
              <tr>
                <td>2021-02-17 07:57</td>
                <td>역시 주 4일 할만하다</td>
                <td>None</td>
              </tr>
              <tr>
                <td>2021-02-17 08:12</td>
                <td>뭔 4그램에 4만원이여</td>
                <td>카페/디저트</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img src={arrow} alt="arrow" id="arrow" />
        </div>
        <div id="table2">
          <table className="GeneratedTable">
            <thead>
              <tr>
                <th>음식 주제</th>
                <th>언급 횟수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>카페/디저트</td>
                <td>15회 </td>
              </tr>
              <tr>
                <td>한식</td>
                <td>8회</td>
              </tr>
              <tr>
                <td>중식</td>
                <td>2회</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img src={arrow} alt="arrow" id="arrow" />
        </div>
        <div id="table3">
          <h3>카페/디저트 관련 인근 매장 추천 광고 </h3>
          <div className="box">
            <img src={img_alt} alt="img_alt" id="img_alt" />
          </div>
        </div>
      </div>
      <button className="button3" onClick={(e) => newFile(e)}>
        채팅 메세지 파일
      </button>
    </div>
  );
}

export default Response;
