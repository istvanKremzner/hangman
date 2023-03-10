import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { alphabet } from '../../../constants';
import { addGuess, useGuesses, usePlayerState } from '../../../store';
import { Button } from '../../button.component';

const useLettersStyles = createUseStyles({
  lettersContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: 4,
    padding: '15% 0',

    '& button': {
      maxWidth: 48,
      maxHeight: 48,
    },
  },
  '@media (min-width: 0px)': {
    lettersContainer: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    }
  },
  '@media (min-width: 400px)': {
    lettersContainer: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    }
  },
  '@media (min-width: 600px)': {
    lettersContainer: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    }
  },
  '@media (min-width: 900px)': {
    lettersContainer: {
      gridTemplateColumns: 'repeat(7, 1fr)',
    }
  },
});

export const Letters = () => {
  const classes = useLettersStyles();
  const dispatch = useDispatch();

  const guesses = useGuesses();
  const playerState = usePlayerState();

  const handleLetterClick = (letter: string) => {
    if (playerState === 'lost' || playerState === 'won') {
      return;
    }

    dispatch(addGuess(letter));
  };

  return (
    <div className={classes.lettersContainer}>
      {
        alphabet.map(letter => (
          <Button
            key={letter}
            inverted
            disabled={guesses.includes(letter)}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </Button>
        ))
      }
    </div>
  );
};
