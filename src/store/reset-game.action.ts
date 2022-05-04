import { Actions } from './actions.constant';

interface IResetGameAction {
  type: Actions.RESET_GAME
  payload: undefined
}

export const resetGame = () => {
  return {
    type: Actions.RESET_GAME,
    payload: undefined
  };
};
