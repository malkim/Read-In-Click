import React, { useState, useEffect } from 'react'
import Word from './word'
import ShoWord from '../shoWord'

const OneSyllable = () => {

    const [nikud, setNikud] = useState('');
    useEffect(() => {
        fetch('localhost:3000/wordsController/' + nikud)
            .then(response => response.json())
            .then(data => <ShoWord data={data} />)
    }, [nikud])

    return (
        <div>
            <button onClick={() => setNikud('kamatz')}>kamatz</button>
            <button onClick={() => setNikud('chirik')}>chirik</button>
            <button onClick={() => setNikud('cholam')}>cholam</button>
            <button onClick={() => setNikud('segol')}>segol</button>
            <button onClick={() => setNikud('shuruk')}>shuruk</button>
            hello
        </div>
    )
}
export default OneSyllable;