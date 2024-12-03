import { useState } from "react";
import "./App.css";

import CBRFtnExTester from "./components/CBRFtnExTester";

function App() {
  const [showCompo, setShowCompo] = useState(true);

  function hideCompo() {
    console.log("성분 숨김 클릭됨");
    setShowCompo(false);
  }

  return (
    <div>
      {showCompo && CBRFtnExTester()}
      <button onClick={hideCompo}>성분 숨김</button>
    </div>
  );
}

export default App;
