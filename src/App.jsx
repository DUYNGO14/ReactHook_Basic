import "./App.scss";
import ColorBox from "./components/ColorBox";
import ToDoList from "./components/ToDoList";
import PostList from "./components/PostList";
import Lock from "./components/Lock";
import { useState } from "react";
function App() {
  const [showLock, setShowLock] = useState(false);
  return (
    <div className="app">
      {showLock && <Lock />}
      <button onClick={() => setShowLock(!showLock)}>Show Lock</button>
      <ColorBox />
      <ToDoList />
      <PostList />
    </div>
  );
}

export default App;
