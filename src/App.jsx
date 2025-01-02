import "./App.scss";
import ColorBox from "./components/ColorBox";
import ToDoList from "./components/ToDoList";
function App() {
  return <div className="app">
    <ColorBox />
    <ToDoList/>
  </div>;
}

export default App;
