import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer }                          from './rootReducer'
import logger                                   from 'redux-logger'



export const store = configureStore({
    reducer: rootReducer,
    middleware: [logger]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
console.log(store.getState())
