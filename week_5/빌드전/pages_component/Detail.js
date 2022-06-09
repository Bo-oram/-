import React,{useEffect, useState} from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import {deletePost} from "../redux/module/post"
import { async } from "@firebase/util";
import { auth } from '../shared/firebase'
import "../home.css"
const Detail = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ready,setReady] = useState(false)
    const [loginUser, setLoginUser] = useState(false)

    // 로케이션으로 받아온 아이들
    const postId = location.state.postId
    const id = location.state.id
    const img = location.state.img
    const text = location.state.text
    const layoutType = location.state.layoutType

    console.log(layoutType)

    

    const delete_Post = async () => {
        dispatch(deletePost(postId));
        setReady(true)
    }
    useEffect(()=>{
        if(ready === true){
            navigate('/')
        }

    },[ready])

    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user.email === id){
                setLoginUser(true)
            }
        })

    },[loginUser])
    

    return (<>
    <div className={layoutType + "type_view all_layout"} onClick={() => {
                 
                }}>
                  <p></p>
                  <p className="userId">{id}</p>
                  <div className="span">
                    <div className="img_area">
                      <img src={img} alt="" />
                    </div>
                    <p className="text">{text}</p>
                    
                  </div>
                </div>

        
        {
            loginUser === true 
            ? (
                <div>
                    <button onClick={() => { navigate('/modify', {state: {postId, id, img, text, layoutType}})}}>수정</button>
                    <button onClick={delete_Post}>삭제</button>
                </div>
                
            )
            : null
        }
        {

        }
        
    </>)
}



export default Detail