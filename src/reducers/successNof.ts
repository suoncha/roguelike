import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SuccessNofState {
  status: boolean,
  message: string,
}

const initialState = {
  status: false,
  message: '',
} as SuccessNofState

const successNofSlice = createSlice({
  name: 'successNof',
  initialState,
  reducers: {
    openNof: (state, action: PayloadAction<string>) => {
        state.status = true
        state.message = action.payload
    },
    closeNof: (state) => {
        state.status = false
    },
  },
})

export const { openNof, closeNof } = successNofSlice.actions
export default successNofSlice.reducer