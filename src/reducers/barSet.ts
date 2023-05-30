import { createSlice } from '@reduxjs/toolkit'

interface BarState {
  feedback: boolean,
  about: boolean,
  changelog: boolean,
}

const initialState = {
  feedback: false,
} as BarState

const barSlice = createSlice({
  name: 'bar',
  initialState,
  reducers: {
    openFeedback: (state) => {
      state.feedback = true
    },
    closeFeedback: (state) => {
      state.feedback = false
    },
    openAbout: (state) => {
      state.about = true
      },
    closeAbout: (state) => {
      state.about = false
    },
    openChangelog: (state) => {
      state.changelog = true
    },
    closeChangelog: (state) => {
      state.changelog = false
    },
  },
})

export const { openFeedback, closeFeedback, openAbout, closeAbout, openChangelog, closeChangelog } = barSlice.actions
export default barSlice.reducer