import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updatePoste } from "./redux/modules/postSlice";
import calmnessImage from "./img/calmness.png";
import exitedImage from "./img/exited.png";
import greatImage from "./img/great.png";
import flutterImage from "./img/flutter.png";
import tiredImage from "./img/tired.png";
import stressImage from "./img/stress.png";
import worryImage from "./img/worry.png";
import blueImage from "./img/blue.png";
import sosoImage from "./img/soso.png";
import { useNavigate } from "react-router-dom";
import { listUpdate } from "./redux/modules/postSlice";

const Write = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [type, setType] = useState("exited");  
  const [text, setText] = useState("");
  const [email,setEmail] = useState("")
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  

  

  const createPost = () => {
    if(!text){
      alert("오늘을 기록해주세요! :)")
    } else {
    const newPost = {
      email: text,
      type: type,
      text: text,
    };
    dispatch(updatePoste(newPost));
    dispatch(listUpdate(newPost));
    navigate("/");
  }
  };

  //드래그 스크롤 함수
  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <>
      <div className="selectTypeBox">
        <h4>지금 내 표정을 알려주세요!</h4>

        <div
          className="selectType"
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          <div className="contentBox">
            <label
              htmlFor="a_type"
              onClick={() => {
                setType("calmness");
              }}
            >
              <input id="a_type" type="radio" name="type" defaultChecked/>
              <div className="imgArea">
                <img src={calmnessImage} alt="" />
              </div>
              <p>평온해</p>
            </label>
            <label
              htmlFor="b_type"
              onClick={() => {
                setType("exited");
              }}
            >
              <input id="b_type" type="radio" name="type" />
              <div className="imgArea">
                <img src={exitedImage} alt="" />
              </div>
              <p>기분 최고</p>
            </label>
            <label
              htmlFor="c_type"
              onClick={() => {
                setType("great");
              }}
            >
              <input id="c_type" type="radio" name="type" />
              <div className="imgArea">
                <img src={greatImage} alt="" />
              </div>
              <p>기분 좋아</p>
            </label>
            <label
              htmlFor="d_type"
              onClick={() => {
                setType("flutter");
              }}
            >
              <input id="d_type" type="radio" name="type" />
              <div className="imgArea">
                <img src={flutterImage} alt="" />
              </div>
              <p>설레</p>
            </label>
            <label
              htmlFor="e_type"
              onClick={() => {
                setType("tired");
              }}
            >
              <input id="e_type" type="radio" name="type" />
              <div className="imgArea">
                <img src={tiredImage} alt="" />
              </div>
              <p>피곤해</p>
            </label>
            <label
              htmlFor="f_type"
              onClick={() => {
                setType("stress");
              }}
            >
              <input id="f_type" type="radio" name="type" />
              <div className="imgArea">
                <img src={stressImage} alt="" />
              </div>
              <p>짜증나</p>
            </label>
            <label
              htmlFor="g_type"
              onClick={() => {
                setType("worry");
              }}
            >
              <input id="g_type" type="radio" name="type" />
              <div className="imgArea">
                <img src={worryImage} alt="" />
              </div>
              <p>평온해</p>
            </label>
            <label
              htmlFor="h_type"
              onClick={() => {
                setType("blue");
              }}
            >
              <input id="h_type" type="radio" name="type" />
              <div className="imgArea">
                <img src={blueImage} alt="" />
              </div>
              <p>우울해</p>
            </label>
            <label
              htmlFor="i_type"
              onClick={() => {
                setType("soso");
              }}
            >
              <input id="i_type" type="radio" name="type" />
              <div className="imgArea">
                <img src={sosoImage} alt="" />
              </div>
              <p>그저 그래</p>
            </label>
          </div>
        </div>
      </div>
      <div className="bottom">
      <textarea 
      placeholder="오늘 하루는 어땠나요?"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {

      }
      <button
        onClick={() => {
          createPost();
          
        }}
      >
        작성하기
      </button>

      </div>
      
     
    </>
  );
};

export default Write;
