import { useSelector } from 'react-redux';
import { IStoreState } from '../store-state.interface';

export const useIncorrectGuesses = () => useSelector<IStoreState, string[]>(state => state.guesses.incorrect);
