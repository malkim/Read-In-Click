import React from 'react'
import ShoWord from '../shoWord'

const DifferentVowel = () => {

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
            <button onClick={() => setNikud('chani')}>chani</button>
            <button onClick={() => setNikud('ola')}>ola</button>
            <button onClick={() => setNikud('tzura')}>tzura</button>
            <button onClick={() => setNikud('mix')}>mix</button>
        </div>
    )
}
export default DifferentVowel;