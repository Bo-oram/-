import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from '../img/logo.svg'
import "./btn.css"

const AppLayout = ({ children }) => {
    const navigate = useNavigate();
  return (
    <Wrap>
      <Header>
        <div className="conBox">
          <div className="logoBox"  onClick={()=>{navigate('/')}}><img src={logo} alt="" /></div>
          <div className="btnArea">
            <span className="fillBtn">로그인</span>
            {/* <span className="fillBtn">로그아웃</span> */}
            <span className="borderBtn">마이페이지</span>
          </div>
        </div>
      </Header>
      <Container>{children}</Container>
    </Wrap>
  );
};

const Wrap = styled.div``;

const Header = styled.div`
  position: fixed;
  z-index:1;
  top: 0;
  width: 100%;
  background-color: #ffeeb9cc;

  .conBox {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80px;
    max-width: 750px;
    margin: auto;
    text-align: center;
    padding: 15px 0;
    .logoBox{
        width:15%;
        height:100%;
        min-width:160px;
        margin:auto;
        display:flex;
        img {
            width:100%;
        }
    }
    .btnArea {
      position: absolute;
      right: 0;
      top: 0;
      span {
        display:inline-block;
        margin-left:10px;
        font-size:15px;
        padding:5px;
        cursor:pointer;

      }
    }
  }
`;

const Container = styled.div`
  padding-top: 120px;
  width:100%;
  max-width:750px;
  margin:auto;
  box-sizing:border-box;
`;

const FillBtn = styled.button`
  padding: 5px;
`;

export default AppLayout;
