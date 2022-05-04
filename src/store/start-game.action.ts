import { wordLengthOptions } from '../constants';
import { getRandomElement } from '../utilts';
import { Actions } from './actions.constant';

export type WordLengthOptions = 3 | 4 | 5 | 7 | 8 | 9;

export interface IStartGameAction {
  type: Actions.START_GAME,
  payload: IStartGamePayload
}

export interface IStartGamePayload {
    wordLength: number
}

type StartGameActionCreator = (wordLength?: WordLengthOptions) => IStartGameAction;

export const startGame: StartGameActionCreator = (wordLength?) => {
  const length = wordLength ?? getRandomElement(wordLengthOptions);

  return {
    type: Actions.START_GAME,
    payload: {
      wordLength: length,
    },
  };
};

