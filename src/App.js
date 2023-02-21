import Argumentation from './argumentation';
import { useState, createContext } from 'react';

const args = [
    {
        id: 0,
        type: "IMP",
        parent: 0,
        children: [1,2] 
    },
    {
        id: 1,
        type: "thesis",
        parent: 0,
        children: []
    },
    {
        id: 2,
        type: "thesis",
        parent: 0,
        children: []
    },
  ]

export const formulaContext = createContext()

function App() {

  const [formula, setFormula] = useState(args)

  return (
    <div style={{padding: "100px", position: "relative", display: "flex", alignItems: "center"}}>
      <formulaContext.Provider value={{formula,setFormula}}>
        <Argumentation id={0}/>
      </formulaContext.Provider>
    </div>
  );
}

export default App;
