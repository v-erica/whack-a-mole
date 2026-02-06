import { useGame } from "./GameContext";

export default function GamePlay() {
  const gameField = new Array(9).fill(0);
  const { mole, whack } = useGame();

  function setClass(index) {
    return mole === index ? "mole" : "moleHole";
  }

  function whackClick(index) {
    if (mole === index) {
      whack();
    }
  }

  return (
    <section>
      <ul className="gameGrid">
        {gameField.map((hole, index) => (
          <li
            className={setClass(index)}
            key={index}
            onClick={() => {
              whackClick(index);
            }}
          >
            hole
          </li>
        ))}
      </ul>
    </section>
  );
}
