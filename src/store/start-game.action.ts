import { getRandomElement, getWordLengths } from '../utilts';
import { Actions } from './actions.constant';

export interface IStartGameAction {
  type: Actions.START_GAME,
  payload: IStartGamePayload
}

export interface IStartGamePayload {
    wordLength: number
}

type StartGameActionCreator = (wordLength?: number) => IStartGameAction;

export const startGame: StartGameActionCreator = (wordLength?) => {
  const length = wordLength ?? getRandomElement(getWordLengths());

  return {
    type: Actions.START_GAME,
    payload: {
      wordLength: length,
    },
  };
};

