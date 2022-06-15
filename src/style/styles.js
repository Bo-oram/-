import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import styled from 'styled-components';

export const theme = createTheme({
palette: {
    primary: {
      main: '#FFBD42',
      contrastText: '#fff'
    },
    action: {
      active: "#F59300",
      hover: "#FFBD42",
    },
  },
});


export const MainContainer = styled.div`
border: 1px solid transparent;
max-width: 480*2px;
margin: 30px auto;
background-color: white;
border-radius: 10px;
padding: 30px;
text-align: center;
padding-bottom: 20px;

button {
    /* background-color: #FFBD42;
    color:#222; */
    /* padding: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    width: 214px;
    margin: 10px 0px; */


    /* :hover {
        background-color: #FFBD42;
        color: white;
    }

    :active {
        background-color: #F59300;
    } */
}
`;


export const GlobalStyle = createGlobalStyle`
h1{
  color: #222;
}

body{
  width: 100vw;
  margin: auto;
  background-color: #FFEEB9;
}
a{
  text-decoration: none;
}
`;