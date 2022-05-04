import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { MAX_GUESSES } from '../../../constants';
import { useIncorrectGuesses, usePlayerState } from '../../../store';

const usePlayerMessage = createUseStyles({
  message: {

  },
  won: {
    color: 'green',
  },
  lost: {
    color: 'red',
  },
})

export const PlayerMessage = () => {
  const classes = usePlayerMessage();

  const incorrectGuesses = useIncorrectGuesses();
  const playerState = usePlayerState();

  return (
    <p className={
      clsx(
        classes.message, {
        [classes.won]: playerState === 'won',
        [classes.lost]: playerState === 'lost',
      })
    }>
      {
        playerState === 'won' ? 'You\'ve won!' :
          (
            playerState === 'lost' ?
              'You\'ve lost!' :
              (
                <>Guesses left:
                  <b>{(MAX_GUESSES - incorrectGuesses.length)}</b>
                </>
              )
          )
      }
    </p>
  );
};
