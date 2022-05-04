import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetGame, startGame, useCorrectGuesses, useSolution } from '../../../store';
import { Button } from '../../button.component';
import { Letters } from './letters.component';
import { Solution } from './solution.component';

const useGameFieldStyles = createUseStyles({
  footerButtonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export const GameField = () => {
  const classes = useGameFieldStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const correctGuesses = useCorrectGuesses();
  const solution = useSolution();

  const hasPlayerWon = useMemo(
    () => solution.split('').every(letter => correctGuesses.includes(letter)),
    [solution, correctGuesses]
  );
  // const hasPlayerLost = useMemo(() => solution.length === correctGuesses.length, [solution, correctGuesses]);

  const handleEndGameClick = () => {
    dispatch(resetGame());
    navigate('/');
  }
  const handleNewGameClick = () => dispatch(startGame())

  return (
    <>
      {
        hasPlayerWon &&
        <p>You've won</p>
      }

      <Solution />

      <p>Play with a word</p>

      <Letters />

      {
        hasPlayerWon &&
        <div className={classes.footerButtonContainer}>
          <Button
            inverted
            onClick={handleEndGameClick}
          >
            End Game
          </Button>
          <Button
            onClick={handleNewGameClick}
          >
            Start New Game
          </Button>
        </div>
      }
    </>
  )
};
