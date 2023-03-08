import { Route, Routes, Link }               from 'react-router-dom'
import { connect }                           from 'react-redux'
import { mapDispatchProps, mapStateToProps } from '../app/store'
import { IProps }                            from '../common/interfaces/props'
import ModelViewer                           from '../features/viewer/Viewer'
import App                                   from '../app/App'
import Auth                                  from '../features/auth/Auth'
import React                                 from 'react'

const Router = ({ state, dispatch, ...props }: IProps) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Auth/>} />
                <Route path="/viewer" element={<ModelViewer/>} />
                <Route path="/dashboard" element={<div>Dashboard</div>} />
            </Routes>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Router)