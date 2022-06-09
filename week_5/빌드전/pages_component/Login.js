import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../shared/firebase'
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [is_login, setIsLogin] = useState(false)
    const [userid, setuserId] = useState(null)
    const [userpw, setuserpw] = useState(null)

    const navigate = useNavigate()

    const loginFB = async () => {
        // console.log(id_ref.current.value)
        try {
            await signInWithEmailAndPassword(auth, userid, userpw)
        } catch(e) {
            if(e.message === "Firebase: Error (auth/wrong-password)."){
                alert('패스워드가 일치하지 않아요!')
            }else if(e.message === "Firebase: Error (auth/user-not-found)."){
                alert('그런 아이디 없는디요?')
            }else{
                alert("아이디와 비밀번호를 확인해주세요")
            }
        }


    }
    const loginCheck = async (user) => {
        if (user) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, loginCheck)
    }, [])

    useEffect(() => {
        if (is_login === true) {
            window.location.href = "/";
        }
    }, [is_login])



    return (
        <>
            <div className="signupContainer">
                <h1 className='title'>로그인</h1>
                <div className="signupContentBox">
                    <div className="con">
                        <p>아이디(이메일 형식)</p>
                        <input type="text" onChange={(e)=>{setuserId(e.target.value)}}/>
                    </div>
                    <div className="con">
                        <p>패스WA드</p>
                        <input type="password" onChange={(e)=>{setuserpw(e.target.value)}}/>
                    </div>
                    {
                        userid !== null && userpw !== null
                        ? <button onClick={() => { loginFB() }} style={{cursor:'pointer'}}>로그인</button>
                        : <button style={{opacity:'0.2'}}>로그인</button>
                    }
                    
                    <p className="anotherBtn" onClick={() => { navigate('/signup') }}>회원가입</p>
                </div>


            </div>
        </>)
}

export default Login