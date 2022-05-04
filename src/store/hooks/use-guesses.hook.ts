import { useSelector } from 'react-redux';
import { IStoreState } from '../store-state.interface';

export const useGuesses = () => useSelector<IStoreState, string[]>(state => [
  ...state.guesses.correct,
  ...state.guesses.incorrect,
]);
