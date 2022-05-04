export interface IStoreState {
  gameState: 'unstarted' | 'started' | 'finished'
  solution: string
  guesses: {
    correct: string[]
    incorrect: string[]
  }
}
