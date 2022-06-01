import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import "./board.css"
import { loadListFB} from "./redux/modules/board"
import { useHistory } from "react-router-dom";


const Bord = (props) => {
    const listItem = useSelector(state => state.board.boardList)
    const history = useHistory()
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(loadListFB())        
    }, [])
    

    return (
        <>
            <h1 className="title">나의 단어장<span className="point">.</span></h1>
            <Link to="/write"><button className="plusBtn">단어추가</button></Link>
            <div className="container">
                
                {listItem.map((l, idx) => {
                    
                    return (
                        <div className="content" key={idx}>
                            <h2 className="word">{listItem[idx].word}</h2>
                            <p className="mean">{listItem[idx].mean}</p>
                            
                            <div className="example">
                                <p>예문</p>
                                <p>{listItem[idx].example}</p>
                            </div>
                        </div>
                        
                    )
                    
                })}

            </div>

        </>
    )
}





export default Bord