import React       from 'react'
import Auth        from '../features/auth/Auth'
import ModelViewer from '../features/viewer/Viewer'



const App = () => {
    return (
        <>
            <h1>Boxer Client</h1>
            <Auth/>
            <ModelViewer/>
        </>
    );
}

export default App;
