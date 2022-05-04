import { Reducer } from '@reduxjs/toolkit';
import { getRandomWord } from '../utilts';
import { Actions } from './actions.constant';
import { IAddGuessPayload } from './add-guess.action';
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

type IActionHandler<Payload = any> = (state: IStoreState, payload: Payload) => IStoreState

export const hangmanReducer: Reducer<IStoreState, IAction> = (
  state = defaultState,
  {
    type,
    payload,
  }
) => {
  const handler = actionHandlers[type];

  return handler ? handler(state, payload) : state;
}

const handleStartGame: IActionHandler<IStartGamePayload> = (state, payload: IStartGamePayload) => ({
  ...state,
  gameState: 'started',
  solution: getRandomWord(payload.wordLength),
  guesses: {
    correct: [],
    incorrect: [],
  },
});

const handleAddGuess: IActionHandler<IAddGuessPayload> = (state, { letter }) => {
  const isCorrect = new RegExp(letter, 'i').test(state.solution);

  return {
    ...state,
    guesses: {
      correct: [
        ...state.guesses.correct,
        ...(isCorrect ? [letter.toLowerCase()] : [])
      ],
      incorrect: [
        ...state.guesses.incorrect,
        ...(!isCorrect ? [letter.toLowerCase()] : [])
      ],
    },
  }
};

const handleResetGame: IActionHandler<undefined> = (state) => {
  return {
    ...defaultState,
  }
};


const actionHandlers: Record<Actions, IActionHandler> = {
  [Actions.START_GAME]: handleStartGame,
  [Actions.ADD_GUESS]: handleAddGuess,
  [Actions.RESET_GAME]: handleResetGame,
};
