import { connect }                           from 'react-redux'
import { mapDispatchProps, mapStateToProps } from '../../app/store'
import { GET_USER }                           from '../../constants/actionTypes'
import React, { MouseEventHandler, useState } from 'react'

export interface IProps {
    state: any,
    dispatch: any
}

function Auth( { state, dispatch }: IProps ) {
    const [ change, setChange ] = useState('EN')

    const ChangeUserName = (e: any) => {
        dispatch.user.GET_USER({ name: change === 'EN' ? 'Chanyang Lee' : "이찬양" })
        setChange(change === 'EN' ? 'KR' : 'EN')
    }

    return (
        <>
            <div className="auth">Auth Component</div>

            <button onClick={ChangeUserName}>{change}</button>
            <div>{state.user.name}</div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Auth)