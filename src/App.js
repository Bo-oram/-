import Register from './Register';
import Login from './Login';
import Write from './Write';
import Detail from './Detail';
import { Route, Routes } from "react-router-dom"
import { GlobalStyle } from './style/styles';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { fetchPost } from './redux/modules/postSlice';
import  AppLayout from "./style/AppLayout"


function App() {

  const dispatch = useDispatch();
  const [is_login, setIsLogin] = useState(false)

  // api에서 리덕스로 옮겨와 가져온 포스트들
  let postList = useSelector(state => state.post.data)
  let items = !postList ? [] : postList   

  React.useEffect(() => {
    dispatch(fetchPost());  
  }, []);


  return (
    <div className="App">
      <GlobalStyle/>
      <AppLayout>

          <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/write" exact element={<Write />} />
        <Route path="/detail/:id" exact element={<Detail />} />
      </Routes>
      </AppLayout>
    
    </div>
  );
}

export default App;
