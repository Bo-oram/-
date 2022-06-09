import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth"
import React, { useEffect, useState } from 'react'
import { auth } from '../shared/firebase'

import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import logoImg from '../logo3.svg'
import Write from './Write'
import Detail from './Detail'
import Modify from './Modify'

import '../App.css'


const App = () => {

  const [is_login, setIsLogin] = useState(false)
  const navigate = useNavigate
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

  

  return (<>

  
    <header>
      <Link to='/'><img className='logoImg' src={logoImg} alt="logo"/></Link>
      {
        is_login === true
          ? <button className='logoutBtn' onClick={() => { signOut(auth) }}>로그아웃</button>
          : <Link to='./login' className='loginBtn'>로그인</Link>
      }
    </header>
    <div className="container">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/write' element ={<Write />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/modify' element={<Modify />} />
    </Routes>
    </div>
  </>)
}




export default App