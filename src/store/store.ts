import {configureStore} from '@reduxjs/toolkit'
import coinReducer from '../features/coinSlice'

const store = configureStore({
    reducer: {
        coin: coinReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch