import React, { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import "./style/board.css";
import "./style/btn.css"
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  

  // api에서 리덕스로 옮겨와 가져온 포스트들
  let postList = useSelector((state) => state.post.data);
  console.log(postList)
  let items = !postList ? [] : postList;



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
      {items.map((p, idx) => {
        return (
          <div
            key={idx}
            className="itemBox"
            onClick={() => {navigate("/detail/" + p.id , {state:items}); }}>
            <div className={p.type + "Image imgArea"}></div>
            <div className="textArea">
              <div className="date">
                2022-06-12 | {Emoji(p.type)} | {p.email}
              </div>
              <div className="text">
                {p.text.length < 50 ? p.text : p.text.slice(0, 35) + "..."}
              </div>
            </div>
          </div>
        );
      })}
      <button className="write" onClick={()=>{
        navigate('/write')
      }}>+</button>
     
    </>
  );
};

export default Home;
