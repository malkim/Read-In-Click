import React, { useState, useEffect } from 'react'
import ShoWord from '../shoWord'


const OneSyllable = () => {

    const [nikud, setNikud] = useState('');
    useEffect(() => {
        fetch('localhost:6666/word/get' + nikud)
            .then(response => response.json())
            .then(data => <ShoWord data={data} />)
            .catch(error => { console.error(error) })
    }, [nikud])
    
    return (
        <div>
            <button onClick={() => setNikud('kamatz')}>kamatz</button>
            <button onClick={() => setNikud('chirik')}>chirik</button>
            <button onClick={() => setNikud('cholam')}>cholam</button>
            <button onClick={() => setNikud('segol')}>segol</button>
            <button onClick={() => setNikud('shuruk')}>shuruk</button>
        </div>
    )
}
export default OneSyllable;