import { Actions } from './actions.constant';

interface IAddGuessAction {
  type: Actions.ADD_GUESS
  payload: IAddGuessPayload
}

export interface IAddGuessPayload {
  letter: string
}

export const addGuess = (letter: string): IAddGuessAction => ({
  type: Actions.ADD_GUESS,
  payload: {
    letter,
  },
});
