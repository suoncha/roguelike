import React, { useState, useEffect, useCallback } from "react";
import './App.css'
import { Unity, useUnityContext} from "react-unity-webgl";

function App() {
  const { unityProvider, isLoaded, loadingProgression, sendMessage } = useUnityContext({
    loaderUrl: "../game/game.loader.js",
    dataUrl: "../game/game.data.gz",
    frameworkUrl: "../game/game.framework.js.gz",
    codeUrl: "../game/game.wasm.gz",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  const [num, setNum] = useState('');
  const [isSet, setSubmit] = useState(false);
  
  function handleSubmit() {
    setSubmit(true)
  }

  function handleClickSpawnEnemies() {
    sendMessage("Spawner", "InitNum", 10);
  }

  if (!isSet) return (
        <div>
      <form onSubmit={() => handleSubmit()}>
        <label>Enter number:</label>
        <input 
        type="text" 
        required 
        value={num} 
        onChange={(e) => setNum(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      
    </div>
  )

  else return (
    <div className="container">
      {isLoaded === false && (
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <button onClick={handleClickSpawnEnemies}>Spawn cube</button>
      <Unity
      unityProvider={unityProvider}
      style={{ width: 1080, height: 800 }}
      />

    </div>
  );


}


export default App
