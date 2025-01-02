import { useState } from "react";
import "./App.scss";
import Lock from "./components/Lock";
import MagicBox from "./components/MagicBox";
function App() {
  const [showLock, setShowLock] = useState(true);
  return (
    <div className="app">
      <div>
        {showLock && <Lock />}
        <button onClick={() => setShowLock(!showLock)}>Show Lock</button>
      </div>

      {/* <ColorBox />
      <ToDoList />
      <PostList /> */}
      <MagicBox />
    </div>
  );
}

export default App;
