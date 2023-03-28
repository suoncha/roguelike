import React, { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext} from "react-unity-webgl";
import type { RootState } from "./store";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "./reducers/counter";
import { LoginPage } from "./screens/loginPage";
import { MobilePage } from "./screens/mobilePage";
import { AppBar, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const { unityProvider, isLoaded, loadingProgression, sendMessage } = useUnityContext({
    loaderUrl: "/game.loader.js",
    dataUrl: "/game.data.gz",
    frameworkUrl: "/game.framework.js.gz",
    codeUrl: "/game.wasm.gz",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const [num, setNum] = useState('');
  const [isSet, setSubmit] = useState(false);
  
  function handleSubmit() {
    setSubmit(true)
  }

  function handleClickSpawnEnemies() {
    sendMessage("Spawner", "InitNum", 10);
  }

  const isDesktop = useMediaQuery('(min-width: 900px)');
  
  if (!isSet) return (
    <>
      {isDesktop ? 
      <LoginPage></LoginPage> : 
      <MobilePage></MobilePage>}
    </>
  )

  else return (
    <>
      {isLoaded === false && (
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <button onClick={handleClickSpawnEnemies}>Spawn cube</button>
      <Unity
      unityProvider={unityProvider}
      style={{ width: 960, height: 640 }}
      />
    </>
  );
}

export default App
