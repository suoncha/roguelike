import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './reducers/gameSet'
import pageReducer from './reducers/pageSwitch'

export const store = configureStore({
    reducer: {
        page: pageReducer,
        game: gameReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch