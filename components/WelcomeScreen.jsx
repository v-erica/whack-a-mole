import { useGame } from "./GameContext";

export default function WelcomeScreen() {
  const { start } = useGame();

  return (
    <>
      <h3>Welcome to Whack a Mole!</h3>
      <p>
        Whack a mole to earn points.
        <br /> How many points can you get?
      </p>
      <button onClick={() => start()}>Play</button>
    </>
  );
}
