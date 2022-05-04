import { createStore } from '@reduxjs/toolkit';
import { hangmanReducer } from './hangman.reducer';

export const store = createStore(
  hangmanReducer,
);
