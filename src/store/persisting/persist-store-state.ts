import { IStoreState } from '../store-state.interface';
import { STORE_PERSISTING_KEY } from './store-persisting-key.constant';

type PersistStoreState = (state: IStoreState) => void; 

export const persistStoreState: PersistStoreState = state => {
  localStorage.setItem(STORE_PERSISTING_KEY, JSON.stringify(state));
};
