import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../shared/firebase";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loadPostFB } from '../redux/module/post';
import "../home.css"
import moment from 'moment';
import 'moment/locale/ko'

const Home = () => {
  const postList = useSelector(state => state.post.postList);
  const [is_login, setIsLogin] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  
  

  React.useEffect(() => {     
    dispatch(loadPostFB());          

  }, [])


  //로그인 상태 체크
  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }



  useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, [])

  
//시간
let [p_time, setTT] = useState([])
const moment = require("moment");
const today = moment();
const postedData = today.format('YYYY,MM,DD,HH,SS').valueOf();

const time = () =>{    
  let i = []  
  postedData.split(',').map((d)=>{
      return i.push(parseInt(d))      
    })
  }
  
time()
  
// console.log(moment().fromNow());
// console.log(moment('2022-05-02').add(-30,"days").format("YYYY-MM-DD"))
console.log(moment([2022, 6, 9, 5, 30, 0]).diff(moment([2022, 6, 9, 5, 25, 0]),'minute') + "분 전"); 
//console.log(moment('현재시간').diff(moment('게시물 올린 날짜'),'days') + "일 전"); 



  return (
    <>
      <div>
        <button onClick={() => { navigate('/write') }}>업로드</button>
        <div>
          {
            
            
            postList.map((p, idx) => {
              
              // const a =  parseInt(postList[idx].date)
              // console.log(moment({p_time}).diff(moment([a]),'minute') + "분 전")

              return (
                <div key={idx} className={postList[idx].layout_type + "type_view all_layout"} onClick={() => {
                  console.log(postList[idx].date)
                  navigate('/detail', {
                    state: {                      
                      postId: postList[idx].post_id,
                      id: postList[idx].user_id,
                      img: postList[idx].img,
                      text: postList[idx].post_text,
                      layoutType:postList[idx].layout_type  ,
                      date:postList[idx].date         
                    }
                  })
                }}>
                  <p></p>
                  <p className="userId">{postList[idx].user_id}</p>
                  <div className="span">
                    <div className="img_area">
                      <img src={postList[idx].img} alt="" />
                    </div>
                    <p className="text">{postList[idx].post_text}</p>                    
                    
                  </div>
                  <div>{moment( [2022, 6, 9, 5, 2,5]).diff(moment([2022,6,9,4,9,9]),'minute') + "분 전" }</div>
                  
                </div>
              )
            })

          }


        </div>
      </div>
    </>
  )
}

export default Home