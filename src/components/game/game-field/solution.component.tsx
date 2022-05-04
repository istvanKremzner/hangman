import { createUseStyles } from 'react-jss';
import { useSolution } from '../../../store';
import { SolutionLetter } from './solution-letter.component';

const useSolutionStyles = createUseStyles({
  solution: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export const Solution = () => {
  const classes = useSolutionStyles();

  const solution = useSolution();

  return (
    <div className={classes.solution}>
      {
        solution.split('').map((letter, index) => (
          <SolutionLetter key={index} letter={letter} />
        ))
      }
    </div>
  );
};
