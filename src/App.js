import './App.css';
import Argumentation from './argumentation';

const args = ["IMP",["AND", ["IMP","a",["NOT","b"],"e","f"],["IMP",["OR",["NOT","c"],["IMP","b","e"]],"f"]],"d"]

function App() {
  return (
    <div style={{display: "flex", padding: "100px"}}>
      <Argumentation args={args}/>
    </div>
  );
}

export default App;
