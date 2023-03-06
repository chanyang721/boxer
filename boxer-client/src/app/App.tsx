import React, { useState } from 'react'



const App = () => {
    const [ name, setName ] = useState('이찬양')
    const [ count, setCount ] = useState(0)

    return (
        <>
            <h1>Boxer</h1>
                <button onClick={() => setName("pray")}>EN</button>
                <button onClick={() => setName("이찬양")}>KR</button>
                <div>{name}</div>
            <br/>
            <br/>
                <button onClick={() => setCount(count + 1)}>up</button>
                <button onClick={() => setCount(count - 1)}>down</button>
                <div className="count">{count}</div>
        </>
    );
}

export default App;
