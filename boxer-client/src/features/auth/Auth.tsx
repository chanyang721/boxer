import { connect }                           from 'react-redux'
import { mapDispatchProps, mapStateToProps } from '../../app/store'
import React, { useState }                   from 'react'
import { IProps }                            from '../../common/interfaces/props'


function Auth( { state, dispatch, ...props }: IProps ) {
    const [ change, setChange ] = useState('EN')

    const changeUserName = ( e: any ) => {
        dispatch.user.GET_USER({ name: change === 'EN' ? 'Chanyang Lee' : "이찬양" })
        setChange(change === 'EN' ? 'KR' : 'EN')
    }

    return (
        <>
            <div className="auth">Auth Component</div>

            <button onClick={changeUserName}>{change}</button>
            <div>{state.user.name}</div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Auth)