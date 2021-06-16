import React from 'react'
import ShoWord from '../mishkal/ShoWord'

const Word = (id) => {
    switch (id) {
        case kamatz:
            fetch('localhost8080/wordsController/' + id)
                .then(response => response.json())
                .then(data => <ShoWord data={data}  />)
        break;
        case chirik:
            fetch('localhost8080/wordsController/' + id)
                .then(response => response.json())
                .then(data => console.log(data))
        break;
        case cholam:
            fetch('localhost8080/wordsController/' + id)
                .then(response => response.json())
                .then(data => console.log(data))
        break;
        case segol:
            fetch('localhost8080/wordsController/' + id)
                .then(response => response.json())
                .then(data => console.log(data))
        break;
        case shuruk:
            fetch('localhost8080/wordsController/' + id)
                .then(response => response.json())
                .then(data => console.log(data))
        break;
        default:
                }
                            return (<div></div>)                          
                    }
 export default Word;