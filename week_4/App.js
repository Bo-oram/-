import { Route } from 'react-router-dom';
import "./board.css"
import Board from './board'
import Write from './write'
import Modify from './Modify'
function App() {
  return (
    <>
      <div className="wrap">
        
        <Route path="/" exact>
          <Board />
        </Route >
        <Route path="/write" exact>
          <Write />
        </Route >
        <Route path="/modify" exact>
          <Modify />
        </Route >
      </div>
    </>
  );
}

export default App;
