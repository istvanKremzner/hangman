import { useMemo } from 'react';
import { MAX_GUESSES } from '../../constants';
import { useCorrectGuesses } from './use-correct-guesses.hook';
import { useIncorrectGuesses } from './use-incorrect-guesses.hook';
import { useSolution } from './use-solution.hook';

export const usePlayerState = () => {
  const correctGuesses = useCorrectGuesses();
  const incorrectGuesses = useIncorrectGuesses();
  const solution = useSolution();

  const hasPlayerWon = useMemo(
    () => solution.split('').every(letter => correctGuesses.includes(letter)),
    [solution, correctGuesses]
  );
  const hasPlayerLost = useMemo(() => incorrectGuesses.length >= MAX_GUESSES, [incorrectGuesses]);

  return hasPlayerLost ? 'lost' : hasPlayerWon ? 'won' : 'playing';
};
