import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [mole, setMole] = useState(null);

  const randomHole = () => {
    return Math.floor(Math.random() * 9);
  };

  const start = () => {
    setIsPlaying(true);
    setMole(randomHole());
    setScore(0);
  };

  const whack = () => {
    setMole(randomHole());
    setScore((s) => s + 1);
  };

  const end = () => {
    setIsPlaying(false);
    setMole(null);
  };

  const restart = () => {
    setIsPlaying(false);
    setScore(0);
  };

  const value = {
    isPlaying,
    restart,
    score,
    mole,
    start,
    whack,
    end,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw Error("useGame must be used within GameProvider");
  return ctx;
}
