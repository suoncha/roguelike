import { Unity, useUnityContext} from "react-unity-webgl";
import type { RootState } from "./store";
import { useSelector } from 'react-redux'
import { LoginPage } from "./screens/loginPage";
import { MobilePage } from "./screens/mobilePage";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const { unityProvider, isLoaded, loadingProgression, sendMessage } = useUnityContext({
    loaderUrl: "/game.loader.js",
    dataUrl: "/game.data.gz",
    frameworkUrl: "/game.framework.js.gz",
    codeUrl: "/game.wasm.gz",
  });

  
  
  function handleClickSpawnEnemies() {
    sendMessage("Spawner", "InitNum", 10);
  }

  const gameState = useSelector((state: RootState) => state.game.status)
  const loadingPercentage = Math.round(loadingProgression * 100);
  
  const isDesktop = useMediaQuery('(min-width: 900px)');
  if (!gameState) return (
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
      {/* <button onClick={handleClickSpawnEnemies}>Spawn cube</button> */}
      <Unity
      unityProvider={unityProvider}
      style={{ width: '100vw', height: '100vh' }}
      />
    </>
  );
}

export default App
