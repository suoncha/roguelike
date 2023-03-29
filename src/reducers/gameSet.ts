import { createSlice } from '@reduxjs/toolkit'

interface GameState {
  status: boolean
}

const initialState = {
  status: false,
} as GameState

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state) => {
      state.status = true
    },
    quitGame: (state) => {
      state.status = false
    },
  },
})

export const { setGame } = gameSlice.actions
export default gameSlice.reducer