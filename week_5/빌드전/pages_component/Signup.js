import React, { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { db, auth } from '../shared/firebase'
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import {Router} from 'react-router-dom'
import{signOut} from "firebase/auth"




const Signup = () => {

    const navigate = useNavigate()
    const name = useRef(null)
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [dbUserId, setDbUserId] = useState("")
    
    
      
      



    const signupFB = async () => {

        const q = query(collection(db, "users"), where("user_id", "==", email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setDbUserId(doc.data())
        });        

        // 파이어인증센터에 이메일,패스워드저장
        // const user = await createUserWithEmailAndPassword(auth,email,pw)
        // .addOnCompleteListener(LoginActivity){
            
        // }
        

        const user_data = await addDoc((collection(db, "users")), {
            // 파이어스토어에 이름 이메일 저장
            user_id: email,
            user_name: name.current.value
        })

        // 에러 대응
        try {
            await createUserWithEmailAndPassword(auth, email, pw );   
            await signOut(auth);         
            return navigate('/login');
        }catch {
            alert("그거슨 이미 사용중인 이메이루찡")
        }
    }

    //이메일 정규식

    const isEmail = (email) => {
        const emailRegex =
          /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    
        return (emailRegex.test(email))
      };


    // 이메일 체크
    const emailCH = () => {
        if (email === "") {
            return null
        } else if (isEmail(email) === true) {
            return true
        } else {
            return false
        }

    }

    //비밀번호 체크
    const pwCH = () => {
        if (pw === "") {
            return null
        } else if (pw.length >= 8) {
            return true
        } else {
            return false
        }
    }



    return (
        <div className="signupContainer">
            <h1 className='title'>회원가입</h1>
            <div className='signupContentBox'>
                <div className="con">
                    <p>이름</p>
                    <input type="text" placeholder='와츄어네임' ref={name} />
                </div>
                <div className="con">
                    <p>아이디(이메일 형식)</p>
                    <input type="text" onChange={(e) => { setEmail(e.target.value) }}  placeholder='너의 이메이루는?...'/>
                    {emailCH() || emailCH() === null ? null : <p className="RestrictionsMG">이.메.일.형.식.....맞춰주세요..</p>}
                </div>
                <div className="con">
                    <p>비밀번호</p>
                    <form action=""><input type="password" onChange={(e) => { setPw(e.target.value) }} placeholder='비밀번호를 입력해주세요' autoComplete="on"/></form>
                    {
                    pwCH() || pwCH() === null ? null : <p className="RestrictionsMG">8자 이상 8자 이상 8자 이상!!!!!</p>
                }
                </div>
                {
                    emailCH() === true && pwCH() === true
                        ? <button style={{cursor:'pointer'}} onClick={() => {signupFB();}}>회원가입</button>
                        : <button style={{opacity:'0.2'}}>회원가입</button>
                }
                <p className="anotherBtn" onClick={()=>{
                    navigate('/login')
                }}>이미 가입 함</p>
                

            </div>


        </div>
    )
}

export default Signup