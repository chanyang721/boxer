import React, { useState }                from 'react'
import { useAppDispatch, useAppSelector } from '../common/hooks'
import { GET_USER, REGISTER }             from '../constants/actionTypes'
import Auth                               from '../features/auth/Auth'



const App = () => {
    const dispatch = useAppDispatch();
    const userName = useAppSelector(( state: any ) => state.user.name)
    const uid = useAppSelector(( state: any ) => state.auth.firebase.uid)
    const [ change, setChange ] = useState('EN')

    const getUser = ( props: any ) => {
        dispatch({
            type   : GET_USER,
            payload: {
                name: change === 'EN' ? 'Chanyang Lee' : "이찬양"
            },
        })
    }

    function testAuth(props: any) {

        dispatch({
            type   : REGISTER,
            payload: {
                firebase: {
                    test: 'test',
                }
            },
        })
    }


    return (
        <>
            <h1>Boxer</h1>

            <button onClick={( e ) => {
                getUser(e)
                setChange(change === 'EN' ? 'KR' : 'EN')
            }}>{change}</button>
            <div>{userName}</div>

            <button onClick={testAuth}>Test</button>
            <Auth />
        </>
    );
}

export default App;
