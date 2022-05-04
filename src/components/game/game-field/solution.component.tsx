import { useSolution } from '../../../store';
import { SolutionLetter } from './solution-letter.componen';

export const Solution = () => {
  const solution = useSolution();

  return (
    <>
      {
        solution.split('').map((letter, index) => (
          <SolutionLetter key={index} letter={letter} />
        ))
      }
    </>
  );
};
