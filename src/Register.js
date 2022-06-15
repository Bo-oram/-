import axios from "axios";
import React, { useEffect, useState, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Link } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onconfirmPasswordHandler = (event) => {
        setconfirmPassword(event.currentTarget.value)
    }

    //회원가입 post 요청 (Axios)
    const registerUser = (event) => {
        event.preventDefault()

        //사용자가 입력한 값 DB에 POST 요청
        const currentUser = {
            "email": Email,
            "password": Password,
            "username": Name
        }

        console.log(currentUser)
        axios.post("http://localhost:5001/users", currentUser)
        .then(respose => { console.log(respose) })
        .catch(error => { })
        .then (console.log('회원가입 성공'))

    }

    return (
        <Container>
            <h1>Join us</h1>
            <LoginContainer>
                <input placeholder="email" onChange={onEmailHandler}/> <br />
                <input placeholder="password" type="password"onChange={onPasswordHandler}/> <br />
                <input placeholder="password confirm" type="password" onChange={onconfirmPasswordHandler}/> <br />
                <input placeholder="이름" onChange={onNameHandler}/> <br />
                <button onClick={registerUser} type="submit">회원가입</button>
            </LoginContainer>

            <Link to="/login" >로그인 </Link>


        </Container>
    )
}

const Container = styled.div`
border: 1px solid transparent;
max-width: 480px;
margin: 30px auto;
background-color: white;
border-radius: 10px;
padding: 30px 30px 50px 30px;
text-align: center;

a{
    font-size: 12px;
}
`;

const LoginContainer = styled.div`
/* display: grid;
grid-template-columns: .5fr 1fr;
text-align: center;
align-items: center; */

span {
    font-display: unset;
}

input {
    padding: 5px;
    width: 200px;
    margin: 5px 0px;
}

button {
    background-color: #FFBD42;
    color: #222;    
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    width: 214px;
    margin: 10px 0px;


    :hover {
        background-color: #FFBD42;
        color: white;
    }

    :active {
        background-color: #F59300;
    }
}
`;



export default Register;