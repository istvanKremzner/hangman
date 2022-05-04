import { GameField, GameOptions } from '../components';
import { useGameState } from '../store';

export const Game = () => {
  const gameState = useGameState();

  return (
    <div>
      {
        gameState === 'unstarted' && <GameOptions />
      }
      {
        gameState === 'started' && <GameField />
      }
    </div>
  );
};
