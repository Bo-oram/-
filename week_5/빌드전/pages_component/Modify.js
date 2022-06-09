import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { storage } from '../shared/firebase'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {useDispatch, useSelector} from 'react-redux'
import {modifyPostFb,loadPostFB} from '../redux/module/post'
import "../home.css"
import PropTypes from 'prop-types';



const Modify = () => {
    const navigate = useNavigate()
    const postList = useSelector(state => state.post.postList);
    const dispatch = useDispatch()
    const location = useLocation()
    const img_ = location.state.img
    const text_ = location.state.text
    const layoutType = location.state.layoutType
    const userId = location.state.id
    const postId = location.state.postId
    const [ready,setReady] = useState(false)
    
    

    // 데이터 뷰에 그려주기
    const [post_text, setUserText] = useState(text_)
    const [preview, setPreview] = useState(img_)

    //수정할 데이터 힝 하나만수정을 못해서 다 갈아끼웁니다 ㅠㅠㅠ
const data = {
    date : new Date(), 
     img : preview ,
     layout_type : layoutType  , 
     post_text:post_text,  
     user_id : userId ,
     post_id : postId     

}

   
    React.useEffect(() => {
        dispatch(loadPostFB()); 
        // dispatch(modifyPostFb({layout_type:"B"},postId))
      }, [])
      

      const updatePost = async(e) => {          
        dispatch(modifyPostFb(data, postId));
        setReady(true)
             

      };
      React.useEffect(() => {
        if(ready === true){
            navigate('/')
        }
      }, [ready])
    
      modifyPostFb("3cjDb81XOwBeJwLSmA71",{layout_type:"B"})
    //이미지 프리뷰 만들어주기
    const insertImg = (e) => {
        let reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onloadend = () => {
            const previewImgUrl = reader.result
            setPreview(previewImgUrl)

        }
    }

    //이미지 유알엘 만들어 주기
    const imgUpload = async (e) => {
        let target = e
        if (target === null) {
            return null
        } else {
            const uploded_file = await uploadBytes(
                ref(storage, `post_img/${e.target.files[0].name}`),
                e.target.files[0]
            )
            const file_url = await getDownloadURL(uploded_file.ref);
            setPreview(file_url)
        }

    }
   
    


    return (
        <><div className={layoutType + "type_view all_layout"}>
            <form encType='multipart/form-data' className="filebox">
                <input id="input-file" type="file" style={{ display: 'none' }} accept='image/*' onChange={
                    (e) => {
                        insertImg(e); imgUpload(e)
                    }} />
                <label htmlFor="input-file" className="label">+</label>

                <p className="imgArea">
                    <img src={preview} alt="" />
                </p>
            </form>
            <textarea cols="30" rows="8" placeholder="오늘 하루 기록하기" onChange={(e) => { setUserText(e.target.value) }} defaultValue={text_}></textarea>
        </div>

            <button onClick={updatePost}>수정하기</button>
            <button>삭제하기</button>
        </>
    )

}

export default Modify