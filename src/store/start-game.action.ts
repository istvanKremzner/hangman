import { getRandomElement } from '../utilts';
import { Actions } from './actions.constant';

type WordLengthOptions = 3 | 4 | 5 | 7 | 8 | 9;

export interface IStartGameAction {
  type: Actions.START_GAME,
  payload: IStartGamePayload
}

export interface IStartGamePayload {
    wordLength: number,
}

type StartGameActionCreator = (wordLength?: WordLengthOptions) => IStartGameAction;

const lengthOptions = [3, 4, 5, 7, 8, 9];

export const startGame: StartGameActionCreator = (wordLength?) => {
  const length = wordLength ?? getRandomElement(lengthOptions);

  return {
    type: Actions.START_GAME,
    payload: {
      wordLength: length,
    },
  };
};

