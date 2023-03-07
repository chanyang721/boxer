import React, { useState }                from 'react'
import { useAppDispatch, useAppSelector } from '../common/hooks'
import { GET_USER }                       from '../constants/actionTypes'



const App = () => {
    const dispatch = useAppDispatch();
    const userName = useAppSelector(( state: any ) => state.user.name)
    const [ change, setChange ] = useState('EN')

    function getUser( props: any ) {
        console.log(props)

        dispatch({
            type   : GET_USER,
            payload: { name: change === 'EN' ? 'Chanyang Lee' : "이찬양" },
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
        </>
    );
}

export default App;
