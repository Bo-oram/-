import React from "react";
import "../css/AppLayout.css";

//이미지
import appImg from "../img/appimg.svg";
import startImg from "../img/starimg.svg";
import headerIcon1 from "../img/headerIcon1.png";
import headerIcon2 from "../img/headerIcon2.png";
import headerIcon3 from "../img/headerIcon3.png";

const AppLayout = ({ children }) => {
  return (
    <>
      <div className="wrap">
        <header>
          <div className="miniMenu">
            <div className="leftMenu">
              <a href="/">
                <img src={appImg} alt="app" />
                앱다운로드
              </a>
              <a href="/">
                <img src={startImg} alt="star" />
                즐겨찾기
              </a>
            </div>
            <div className="rightMenu">
              <div className="login">
                <a href="/">로그인/회원가입</a>
                <a href="/">내상점</a>
              </div>
              <div className="logout" style={{display:'none'}}>
                <p>로그아웃</p>
                <p>알림</p>
                <p>내 상점</p>
              </div>
            </div>
          </div>
          <div className="headerContent">
            <div>로고</div>
            <div><input type="search" /></div>
            <div>
              <a href="/"><img src={headerIcon1} alt=""/>판매하기</a>
              <a href="/"><img src={headerIcon2} alt=""/>내상점</a>
              <a href="/"><img src={headerIcon3} alt=""/>번개톡</a>
            </div>
          </div>
        </header>
        <div>{children}</div>
        <footer></footer>
      </div>
    </>
  );
};

export default AppLayout;
