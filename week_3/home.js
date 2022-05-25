import React,{useEffect} from 'react';
import { Route, Link, useLocation, usehistory } from "react-router-dom";
import Sub from './subPage';
import './main.css';
import Loading from './move.png';


const Home = (props) => {
    const week = props.list
    const my_wrap = React.useRef(null);
    const five = ['','','','']; 
    let num = Math.random() * 5;
    const reset = (()=>{
        const num = document.getElementById('num')
        num.innerText = "0.0"
    })   
    
    var all = 0
    //평점을 위한 var에요 ㅠㅠ 이부분 고려하지 않고 컬러동그라미를 함수 안에서 주어서
    //const나 let은 코드블록 밖에서 사용을 못하니까 var로 넣었어요


    
    return (
        <div ref={my_wrap} >
            <h1>내 일주일은?</h1>
            
            { week.map((item, index)=>{
                const random = Math.floor((Math.random() * 5)+1)
                let arr = []

                for(let i = 1; i <= random; i++ ){
                    arr.push(i)                                                        
                }
                let arr2 = five.slice((arr.length)-1)                
                all += arr.length 
                console.log(arr)
                return  (
                    <div key={index} className='circleBox'>
                        <p id='week_one'>{week[index]}</p>
                        <ul>
                            {arr.map((item,index) => {return (<li key={index} id="circle" className='color'></li>)})}
                            {arr2.map((item,index) => {return (<li key={index} id="circle"></li>)})}
                            {/* 다섯개의 요소를 가진 배열안에서 랜덤값만큼 뺀 새로운 배열을 랜덤동그라미 컬러배열과
                            나란히 놓았어여 ... 지금 이순간 나의 최선... */}
                            
                        </ul>                        
                        <Link to={{ pathname: '/subPage',  state: week[index] }}>
                            <img src={Loading} alt=""/>
                        </Link>
                        
                    </div>
                )  
                

            })}
            <div style={{fontSize:'30px'}} className="score">
                <h5>평균 평점</h5>
                    <div id='num' className='num'>{(all/7).toFixed(1)}</div>                    
                    <button onClick={() => {reset()}}>reset</button>                             
            </div> 
            {console.log("총점" + all)} 
            {console.log("평균" + (all/7).toFixed(1))}                
        </div>
        
    );


    
    
}





export default Home;

