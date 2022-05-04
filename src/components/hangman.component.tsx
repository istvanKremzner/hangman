// svg path, svg circle {
//   stroke: #000;
//   stroke-width: 0.25;
//   stroke-linecap: round;
//   fill: none;

import { FC } from 'react';
import { createUseStyles } from 'react-jss';

interface IHangmanProps {
  width: string;
}

const useHangmanStyles = createUseStyles({
  hangman: {
    '& path, & circle': {
      stroke: ' #000',
      strokeWidth: '0.25',
      strokeLinecap: 'round',
      fill: 'none',
    },
  },
});


export const Hangman: FC<IHangmanProps> = ({
  width,
}) => {
  const classes = useHangmanStyles();


  return (
    <svg
      className={classes.hangman}
      width={width}
      height="auto"
      viewBox="0 0 10 12"
    >
      <path d="M1,11 h8" />
      <path d="M9,11 v-10" />
      <path d="M9,1 h-4" />
      <path d="M5,1 v2" />
      <circle cx="5" cy="4" r="1" />
      <path d="M5,5 v3" />
      <path d="M5,5 l-2,2" />
      <path d="M5,5 l2,2" />
      <path d="M5,8 l-2,2" />
      <path d="M5,8 l2,2" />
    </svg>
  );
};
