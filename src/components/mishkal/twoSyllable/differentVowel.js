import React from 'react'
import Word from '../onesyllable/word'

const DifferentVowel = () => {
    
    // const gina = () => {
    //     return (<Word id="gina" />)
    // }
    // const chani = () => {
    //     return (<Word id="chani" />)

    // }
    // const ola = () => {
    //     return (<Word id="ola" />)

    // }
    // const tzura = () => {
    //     return (<Word id="tzura" />)

    // }
    // const mix = () => {
    //     return (<Word id="mix" />)

    // }
    const[nikud,setNikud]=useState('')
    useEffect{[
   
        fetch('localhost8080/wordsController/' + nikud)
        .then(response => response.json())
        .then(data => <ShoWord data={data}/>)
    ],nikud}
    return (
        <div>
        <button  onClick={()=>setNikud('gina')}>kamatz</button>
        <button  onClick={()=>setNikud('chani')}>kamatz</button>
        <button  onClick={()=>setNikud('ola')}>kamatz</button>
        <button  onClick={()=>setNikud('tzura')}>kamatz</button>
        <button  onClick={()=>setNikud('mix')}>kamatz</button>
        </div>
    )
}
export default DifferentVowel;