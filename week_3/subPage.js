import React from 'react';
import styled from "styled-components";
import { useHistory, useLocation } from 'react-router-dom';

const SubPage = (props) => {
    const history = useHistory();
    const location = useLocation();
    const week = (location.state) + "요일"
    const click = () => {

    }
    const [rate, setRate] = React.useState(0);






    return (
        <div>
            <TITLE><WEEK>{week}</WEEK>평점 남기기</TITLE>
            {

            }
            <CLICK className='click'>
                {Array.from({ length: 5 }, (item, idx) => {
                    return (
                        <div
                            key={idx}
                            onClick={() => {
                                setRate(idx + 1);
                            }}
                            style={{
                                backgroundColor: rate < idx + 1 ? "#eee" : "purple",
                                boxShadow: rate < idx + 1 ? "none" : "2px 1px 0px 2px #530253"
                            }}
                        ></div>
                    );
                })}
            </CLICK>
            <div>


            </div>
            <BTN onClick={() => { history.goBack(1) }}>평점 남기기</BTN>

        </div>
    )
}


const TITLE = styled.div`
    font-size:18px;
    margin-top:25px;
`
const CLICK = styled.div`
    display:flex;
    justify-content:center;
    
`



const WEEK = styled.span`
    display:inline-block;
    box-shadow: inset 0 -10px 0 #FBDA2D;
    color:#444;
    padding:5px;
    font-size:20px;
    font-weight:bold;
    margin-right:5px;
    padding:0 10px;
`

const BTN = styled.div`
    margin: 20px auto 0;
    width: 60%; 
    border-radius: 5px; 
    background-color:purple;
    color:#fff; 
    font-size: 18px; 
    cursor: pointer; 
    padding:5px 0; 
    box-shadow: 2px 1px 0px 2px #530253;
`



export default SubPage

