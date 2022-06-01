import React from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setWord, setMean, setExample } from "./redux/modules/write"
import {addList, addListFB} from "./redux/modules/board"
import "./board.css"
import {db} from "./firebase"
import { collection, addDoc } from "firebase/firestore";



const Write = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const word_ref = React.useRef();
    const mean_ref = React.useRef();
    const example_ref = React.useRef();

    return (
        <>
            <h1 className="title">오늘의 단어는 <span className="point">?!</span></h1>
            <div className="writeArea">
                <div className="writeBox">
                    <p>단어</p>
                    <input type="text" ref={word_ref} />
                    <p>뜻</p>
                    <textarea type="mean_ref" ref={mean_ref}></textarea>
                    <p>예문</p>
                    <textarea type="example_ref" ref={example_ref}></textarea>
                    <button onClick={async () => {
                        dispatch(addListFB({
                            word: word_ref.current.value,
                            mean: mean_ref.current.value,
                            example: example_ref.current.value
                        }))
                        history.push("/")    
                    }}>추가하기</button>
                </div>
            </div>
        </>
    )
}
export default Write