import { createContext, useState } from 'react';
import { getInitialCity } from '../utils';

export const GameContext = createContext(null);

// eslint-disable-next-line react/prop-types
const GameProvider = ({ children }) => {
  const [firstCity, setFirstCity] = useState(getInitialCity());
  const [secondCity, setSecondCity] = useState(getInitialCity());
  const gameCompleted = firstCity.ready && secondCity.ready;
  const [history, setHistory] = useState([]);

  const pushHistory = (city1, city2) => {
    setHistory((prev) => {
      const moveNumber = prev.length + 1;
      const newEntry = {
        moveNumber,
        city1: { ...city1 },
        city2: { ...city2 },
      };
      return [...prev, newEntry];
    });
  };

  const value = {
    firstCity,
    setFirstCity,
    secondCity,
    setSecondCity,
    gameCompleted,
    history,
    pushHistory,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
