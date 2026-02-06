import GamePlay from "./GamePlay";
import { useGame } from "./GameContext";

export default function GameScreen() {
  const { score, restart } = useGame();

  return (
    <>
      <nav>
        <p>Score: {score}</p>
        <button onClick={() => restart()}>Restart</button>
      </nav>
      <GamePlay />
    </>
  );
}
