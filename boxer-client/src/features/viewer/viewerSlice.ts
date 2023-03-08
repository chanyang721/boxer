import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../../app/store'



const viewerSlice = createSlice({
    name         : 'viewer',
    initialState : {

    },
    reducers     : {

    },
    extraReducers: ( builder ) => {
        builder
            .addMatcher(
                ( action ) => action.type.startsWith('viewer'),
                ( state, action ) => {
                    console.log('viewerSlice addMatcher', action)
                }
            )
            .addDefaultCase(( state, action ) => state)
    }
})

export const viewerDispatch = ( dispatch: AppDispatch ) => {
    return {

    }
}

export const viewerActions = viewerSlice.actions
export default viewerSlice.reducer