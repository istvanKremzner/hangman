import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { alphabet } from '../../../constants';
import { addGuess, useGuesses } from '../../../store';
import { Button } from '../../button.component';

const useLettersStyles = createUseStyles({
  lettersContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: 4,
    padding: '15% 0',
  },
});

export const Letters = () => {
  const classes = useLettersStyles();
  const dispatch = useDispatch();

  const guesses = useGuesses();

  const handleLetterClick = (letter: string) => {
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
