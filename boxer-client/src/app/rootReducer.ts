import { combineReducers } from 'redux'
import { authReducer }     from '../features/auth/authSlice'
import { userReducer }     from '../features/user/userSlice'



export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})