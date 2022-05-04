import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetGame, startGame, usePlayerState } from '../../../store';
import { Button } from '../../button.component';
import { Hangman } from '../../hangman.component';
import { Letters } from './letters.component';
import { PlayerMessage } from './player-message.component';
import { Solution } from './solution.component';

const useGameFieldStyles = createUseStyles({
  gameContainer: {
    display: 'flex',
    alignItems: 'start',
  },
  footerButtonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  hangmanContainer: {
    width: '20%',
    textAlign: 'left',
    flex: 1,
  },
  guessingContainer: {
    flex: 3,
  },
})

export const GameField = () => {
  const classes = useGameFieldStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const playerState = usePlayerState();

  const handleEndGameClick = () => {
    dispatch(resetGame());
    navigate('/');
  }
  const handleNewGameClick = () => dispatch(startGame())

  return (
    <div className={classes.gameContainer}>
      <div className={classes.hangmanContainer}>
        <Hangman width="60%" playing />
      </div>

      <div className={classes.guessingContainer}>
        <PlayerMessage />

        <Solution />
        <p>Play with a word</p>
        <Letters />

        {
          playerState === 'lost' &&
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
      </div>
    </div>
  )
};
