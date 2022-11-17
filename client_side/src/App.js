import './App.css';
import Paper from "./components/paper";

function App() {
  
  const arr = ["left", "right", "bottom_left", "bottom_right", "all"]
  
  return (
    <div className="center">
      {arr.map(v => (
      <Paper angle={v}/>
      ))}
    </div>
  )
  
  
}

export default App;
