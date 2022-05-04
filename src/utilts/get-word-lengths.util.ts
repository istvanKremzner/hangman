import { words } from '../constants';

export const getWordLengths = () => {
  const count = words.reduce<Record<number, number>>((lengths, word) => ({
    ...lengths,
    [word.length]: (lengths[word.length] ?? 0) + 1,
  }), {});

  return Object.keys(count).map(key => parseInt(key));
}
