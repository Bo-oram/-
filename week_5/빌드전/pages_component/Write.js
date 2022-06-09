import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage, auth } from "../shared/firebase";
import { onAuthStateChanged, reload } from "firebase/auth";
import { history } from "../redux/configStore";
import atypeImg from "../atype.png";
import btypeImg from "../btype.png";
import ctypeImg from "../ctype.png";
import "../write.css";
import { async } from "@firebase/util";
import moment from 'moment';
import 'moment/locale/ko'

const Write = () => {
  const [layout, setLayout] = useState("A");

  return (
    <>
      <div className="typeBox">
        <label className="">
          <img src={atypeImg} alt="" />
          <input
            type="radio"
            name="layout"
            onChange={(e) => {
              setLayout("A");
            }}
            defaultChecked
          />
        </label>
        <label>
          <img src={btypeImg} alt="" />
          <input
            type="radio"
            name="layout"
            onChange={(e) => {
              setLayout("B");
            }}
          />
        </label>
        <label>
          <img src={ctypeImg} alt="" />
          <input
            type="radio"
            name="layout"
            onChange={(e) => {
              setLayout("C");
            }}
          />
        </label>
      </div>
      {
        {
          // 타입별로 스타일을 다르게 주자
          A: (
            <div className="A_type type">
              <Layout layout={layout} />
            </div>
          ),
          B: (
            <div className="B_type type">
              <Layout layout={layout} />
            </div>
          ),
          C: (
            <div className="C_type type">
              <Layout layout={layout} />
            </div>
          ),
        }[layout]
      }
    </>
  );
};











export const Layout = (props) => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(
    "https://firebasestorage.googleapis.com/v0/b/authex-799c7.appspot.com/o/images%2Fimg_none.png?alt=media"
  );

  //저장할 데이터
  const [imgUrl, setImgUrl] = useState(null);
  const [text, setText] = useState(null);
  const [user, setUser] = useState(null);


//시간
  

  // 유저 아이디 가져오기
  useEffect(() => {
    const isLogin = onAuthStateChanged(auth, (user) => {
      if (!user) {
        alert("로그인이 필요해요");
        navigate("/login");
      }
      setUser(user.email);
    });
  }, []);

  //이미지 유알엘 만들어 주기
  const imgUpload = async (e) => {
    let target = e;
    if (target === null) {
      return null;
    } else {
      const uploded_file = await uploadBytes(
        ref(storage, `post_img/${e.target.files[0].name}`),
        e.target.files[0]
      );
      const file_url = await getDownloadURL(uploded_file.ref);
      setImgUrl(file_url);
    }
  };

  //이미지 프리뷰 만들어주기
  const insertImg = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      setPreview(previewImgUrl);
    };
  };
  //db에 저장하자
  const postFB = async () => {
    const moment = require("moment");
    const today = moment();
    const postedData = today.format('YYYY,MM,DD,hh,mm')
    
    let p_time = []
         
      postedData.split(',').map((d)=>{
          p_time.push(parseInt(d))
      })
      console.log(p_time)
    

    const date = new Date();
    const user_data = await addDoc(collection(db, "post"), {
      user_id: user,
      img: imgUrl,
      post_text: text,
      layout_type: props.layout,
      date: p_time,
    });
    navigate("/");
  };

  return (
    <>
      <div className="typeContent">
        <form encType="multipart/form-data" className="filebox">
          <input
            id="input-file"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              imgUpload(e);
              insertImg(e);
            }}
            accept="image/*"
          />
          <label htmlFor="input-file" className="label">
            +
          </label>
          <p className="imgArea">
            <img src={preview} alt="" />
          </p>
        </form>
        <textarea
          cols="30"
          rows="8"
          placeholder="오늘 하루 기록하기"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      {
          imgUrl === null  || text === null ? null: <button
          onClick={() => {
            postFB();
          }}
        >
          포스팅하기
        </button>

      }

    </>
  );
};

export default Write;
