// import { GameProvider } from "../components/GameContext";
import WelcomeScreen from "../components/WelcomeScreen";
import GameScreen from "../components/GameScreen";
import { useGame } from "../components/GameContext";

export default function App() {
  const { isPlaying } = useGame();

  return (
    <>
      <header>
        <h1>Whack a Mole</h1>
      </header>
      <main>{!isPlaying ? <WelcomeScreen /> : <GameScreen />}</main>
    </>
  );
}
