import { useSelector } from 'react-redux';
import { IStoreState } from '../store-state.interface';

export const useSolution = () => useSelector<IStoreState, string>(state => state.solution);
