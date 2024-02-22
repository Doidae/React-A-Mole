import './App.css';
import { useState } from 'react'
import MoleContainer from './components/MoleContainer'



function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let Hill = []
    for(let i = 0; i < 9; i++) {
      Hill.push(<MoleContainer key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { Hill }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1 style={{'font-size':'5em','color':'white'}}>React-A-Mole!</h1>
      <div style={{'font-size':'3em', 'margin-bottom':'20px','color':'white'}}>{score}</div>
      {createMoleHill()}
    </div>
  );
}

export default App;

//Styling Reference:

//<div style={{'display': 'inline-block', 'width': '30vw'}}>