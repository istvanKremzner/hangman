import clsx from 'clsx';
import { FC, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useCorrectGuesses } from '../../../store';

interface ISolutionLetterProps {
  letter: string
}

const useSolutionLetterStyles = createUseStyles({
  letterBox: {
    width: 20,
    height: 20,
    border: '1px solid black',
    margin: 1,

    '&>p': {
      padding: 0,
      margin: 0,
      textTransform: 'uppercase',
    },
  },
  hidden: {
    visibility: 'hidden',
  },
});

export const SolutionLetter: FC<ISolutionLetterProps> = ({
  letter,
}) => {
  const classes = useSolutionLetterStyles();

  const correctGuesses = useCorrectGuesses();

  const isFound = useMemo(() => correctGuesses.includes(letter), [correctGuesses, letter]);

  return (
    <div className={classes.letterBox}>
      <p className={clsx({
        [classes.hidden]: !isFound,
      })}>
        {letter}
      </p>
    </div>
  );
};
