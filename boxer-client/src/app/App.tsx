import React, { useState }                from 'react'
import { useAppDispatch, useAppSelector } from '../common/hooks'
import { GET_USER, REGISTER }             from '../constants/actionTypes'
import Auth                               from '../features/auth/Auth'



const App = () => {
    return (
        <>
            <h1>Boxer</h1>
            <Auth />
        </>
    );
}

export default App;
