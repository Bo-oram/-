import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { addUser } from "./redux/modules/Users";
import { useDispatch } from "react-redux"
import store from "./redux/configStore";

const Login = () => {
    // const [currentUser, setCurrentUser] = useState(null);
    const dispatch = useDispatch()
    
    const navigate = useNavigate();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
        
    }




    const userLogin = async () => {
        try {
            const reponse = await axios.get('http://localhost:5001/users',{
                params: {
                    "email":Email,
                    "password":Password
                }
            })
            console.log(...reponse.data);
            dispatch(addUser(...reponse.data));
            // setCurrentUser(reponse.data);
            navigate("/");

        } catch(error) {
            alert(error)
        }
    };
    // const userLogin = () => {
    //     axios.get('http://localhost:5001/users',{
    //         params: {
    //             "email":Email,
    //             "password":Password
    //         }
    //     })
    //     .then((response) => {
    //         const current_user = response.data
    //         console.log(...current_user)
    //         dispatch(addUser(...current_user))
    //         setCurrentUser(...current_user)
    //         console.log(currentUser)
    //         history.push("/")
    //     })
    //     .catch(function (error) {
    //         alert(error)
    //     });
    // }

    return (
        <Container>
            <h1>Login</h1>
            <LoginContainer>
                <input placeholder="email" onChange={onEmailHandler}/> <br />
                <input placeholder="password" type="password" onChange={onPasswordHandler}/> <br />
                <button type="submit" onClick={userLogin}>로그인</button>
            </LoginContainer>
            <Link to="/register" >회원가입 </Link> 

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
input {
    padding: 5px;
    width: 200px;
    margin: 5px 0px;
}

button {
    background-color: #FFBD42;
    color:#222;
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



export default Login;