import { useSelector } from 'react-redux';
import { GameState, IStoreState } from '../store-state.interface';

export const useGameState = ( ) => useSelector<IStoreState, GameState>(state => state.gameState);
