import { words } from '../constants';
import { getRandomElement } from './get-random-element.util';

export const getRandomWord = (length: number) => getRandomElement(words.filter(word => word.length === length));
