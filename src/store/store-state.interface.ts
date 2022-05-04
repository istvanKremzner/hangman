export interface IStoreState {
  gameState: GameState
  solution: string
  guesses: {
    correct: string[]
    incorrect: string[]
  }
}

export type GameState = 'unstarted' | 'started' | 'finished'
