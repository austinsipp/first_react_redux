import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import toDoReducer from '../features/toDoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: toDoReducer
    }
})