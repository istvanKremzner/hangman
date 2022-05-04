import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { useIncorrectGuesses } from '../store';

interface IHangmanProps {
  width?: string
  playing?: boolean
}

const useHangmanStyles = createUseStyles({
  hangman: {
    minWidth: 50,

    '& path, & circle': {
      stroke: ' #000',
      strokeWidth: '0.25',
      strokeLinecap: 'round',
      fill: 'none',
    },
  },
});


export const Hangman: FC<IHangmanProps> = ({
  width = '100%',
  playing,
}) => {
  const classes = useHangmanStyles();

  const incorrectGuesses = useIncorrectGuesses();

  return (
    <svg
      className={classes.hangman}
      width={width}
      height="100%"
      viewBox="0 0 10 12"
    >
      {(!playing || incorrectGuesses.length > 0) && <path id="land" d="M1,11 h8" />}
      {(!playing || incorrectGuesses.length > 1) && <path id="gallow-vertical" d="M9,11 v-10" />}
      {(!playing || incorrectGuesses.length > 2) && <path id="gallow-horizontal" d="M9,1 h-4" />}
      {(!playing || incorrectGuesses.length > 3) && <path id="rope" d="M5,1 v2" />}
      {(!playing || incorrectGuesses.length > 4) && <circle id="head" cx="5" cy="4" r="1" />}
      {(!playing || incorrectGuesses.length > 5) && <path id="body" d="M5,5 v3" />}
      {(!playing || incorrectGuesses.length > 6) && <path id="left-arm" d="M5,5 l-2,2" />}
      {(!playing || incorrectGuesses.length > 7) && <path id="right-arm" d="M5,5 l2,2" />}
      {(!playing || incorrectGuesses.length > 8) && <path id="left-leg" d="M5,8 l-2,2" />}
      {(!playing || incorrectGuesses.length > 9) && <path id="right-leg" d="M5,8 l2,2" />}
    </svg>
  );
};
