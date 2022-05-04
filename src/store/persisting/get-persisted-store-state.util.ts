import { IStoreState } from '../store-state.interface';
import { STORE_PERSISTING_KEY } from './store-persisting-key.constant';

type GetPersistedStoreState = () => IStoreState | null

export const getPersistedStoreState: GetPersistedStoreState = () => {
  const state = localStorage.getItem(STORE_PERSISTING_KEY);
  return state ? JSON.parse(state) as IStoreState : null;
};
