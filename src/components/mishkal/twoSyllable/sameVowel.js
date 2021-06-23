import React from 'react'
import ShoWord from '../shoWord'

const SameVowel = () => {
    const [nikud, setNikud] = useState('')
    useEffect(() => {

        fetch('localhost8080/wordsController/' + nikud)
            .then(response => response.json())
            .then(data => <ShoWord data={data} />)
            , nikud
    })
    return (
        <div>
            <button onClick={() => setNikud('gina')}>gina</button>
            <button onClick={() => setNikud('chani')}>kamatz</button>
            <button onClick={() => setNikud('ola')}>kamatz</button>
            <button onClick={() => setNikud('tzura')}>kamatz</button>
            <button onClick={() => setNikud('mix')}>kamatz</button>
        </div>
    )

}
export default SameVowel;