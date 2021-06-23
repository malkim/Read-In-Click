import React from 'react'
import { useHistory } from "react-router-dom";

const Mishkal = () => {

    let history = useHistory();

    const oneSyllable = () => {
        history.push('/oneSyllable')
    }
    const twoSyllable = () => {
        history.push('/twoSyllable')
    }
    const consonant = () => {
        history.push('/consonant')
    }
    return (
        <div>
            משקל
            <button onClick={oneSyllable}>הבהרה אחת</button>
            <button onClick={twoSyllable}>שתי הבהרות </button>
            <button onClick={consonant}>עיצור </button>

        </div>)
}

export default Mishkal;