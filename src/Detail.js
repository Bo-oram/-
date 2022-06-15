import React,{useState, useRef} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './style/board.css'

const Detail = (props) => {
  let postList = useSelector((state) => state.post.data);
  
  let items = !postList ? [] : postList;
  let postId = useParams();

  const Emoji = (type) => {
    return (
      (type === "calmness" && "평온해") ||
      (type === "exited" && "기분 최고!") ||
      (type === "great" && "완전 좋아") ||
      (type === "flutter" && "설레") ||
      (type === "tired" && "피곤해") ||
      (type === "stress" && "짜증나") ||
      (type === "worry" && "걱정돼") ||
      (type === "blue" && "우울해") ||
      (type === "soso" && "그저 그래")
    );
  };


  return (
    <>
      {items.map((i, idx) => {
        return i.id == postId.id ? (
          <div key={idx}>
            <div className="modeArea">
              <h3>{Emoji(i.type)}</h3>
              <p className={i.type + "Image imgArea"}></p>
            </div>
            <div className="conBox">
              <div className="dateArea">
                <p>{i.email}</p>
                <p>|</p>
                <p>2022-06-14</p>
              </div>
              <div className="teaxArea">
                {i.text}
              </div>
            </div>
          </div>
        ) : null;
      })}
    </>
  );
};
export default Detail;
