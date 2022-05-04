import { useCallback, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { startGame } from '../../store';
import { getWordLengths } from '../../utilts';
import { Button } from '../button.component';

type LengthOption = 'random' | number

const useGameOptionsStyles = createUseStyles({
  instructions: {
    textAlign: 'center',
  },
  container: {
    minHeight: '30vh',
    textAlign: 'center',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  optionButtonsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20%',
    padding: '10% 45%',
    alignItems: 'center',
    justifyContent: 'center',

    '&>button': {
      width: '20px',

      '&:last-child': {
        gridColumn: 'span 3',
        backgroundColor: 'yellowx',
        width: 'auto',
      }
    },
  },
  startButton: {
    margin: '20% auto 10% auto',
  },
});

export const GameOptions = () => {
  const classes = useGameOptionsStyles();

  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState<LengthOption>(5);

  const wordLengths = useMemo(() => getWordLengths(), []);

  const handleClick = useCallback((option: LengthOption) => setActiveButton(option), [setActiveButton]);
  const handleStart = () => {
    const wordLength = activeButton === 'random' ? undefined : activeButton as number;
    dispatch(startGame(wordLength));
  };

  return (
    <div className={classes.container}>
      <p className={classes.instructions}>
        Let's play <b>Hangman!</b>
        How many letters do your want in your word?
      </p>

      <div className={classes.optionButtonsContainer}>
        {
          [...wordLengths, 'random'].map(option => (
            <Button
              key={option}
              active={activeButton === option}
              inverted
              onClick={() => handleClick(option as LengthOption)}
            >
              {option}
            </Button>
          ))
        }
      </div>

      <Button
        className={classes.startButton}
        onClick={handleStart}
      >
        Let's play!
      </Button>
    </div>
  );
};
