import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./home";
import Circle from "./circle";
import Sub from './subPage'


function App() {  
  const [week] = React.useState(['월','화','수','목','금','토','일']);
  const a = []
  for (let i = 0; i < 7; i++) {
    a.push(Math.floor(Math.random() * 6))
  }

  return (
    <div className="App">
      
      <div className='container'>
        
        <div className='random_box'>
          <Route path="/" exact>
            <Home list={week} />            
          </Route>
          <Route path="/subPage">
            <Sub />            
          </Route>
        </div>
      </div>

    </div>
  );
}

export default App;
