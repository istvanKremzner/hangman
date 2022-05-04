import { Reducer } from '@reduxjs/toolkit';
import { getRandomWord } from '../utilts';
import { Actions } from './actions.constant';
import { IStartGamePayload } from './start-game.action';
import { IStoreState } from './store-state.interface';

const defaultState: IStoreState = {
  gameState: 'unstarted',
  solution: '',
  guesses: {
    correct: [],
    incorrect: [],
  },
};

interface IAction {
  type: Actions
  payload: any // if I had more time i would have typed it correctly
}

type IActionHandler = (state: IStoreState, payload: any) => IStoreState

export const hangmanReducer: Reducer<IStoreState, IAction> = (
  state = defaultState,
  {
    type,
    payload,
  }
) => {
  const handler = actionHandlers[type];

  return handler ? handler(payload, state) : state;
}

const handleStartGame: IActionHandler = (state, payload: IStartGamePayload) => ({
  ...state,
  gameState: 'started',
  solution: getRandomWord(payload.wordLength),
  guesses: {
    correct: [],
    incorrect: [],
  },
});

const actionHandlers: Record<Actions, IActionHandler> = {
  [Actions.START_GAME]: handleStartGame,
};
