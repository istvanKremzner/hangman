export const getRandomElement = <Element>(array: Element[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
