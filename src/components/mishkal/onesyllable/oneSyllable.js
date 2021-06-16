import React, { useState, useEffect } from 'react'
//import { useHistory } from "react-router-dom";
import Word from './word'
import ShoWord from '../shoWord'

const OneSyllable = () => {
    //     let history=useHistory();
    //     const id="";
    const[nikud,setNikud]=useState('')
    useEffect{[
   
        fetch('localhost8080/wordsController/' + nikud)
        .then(response => response.json())
        .then(data => <ShoWord data={data}/>)
    ],nikud}
    // const chirik = () => {
    //     return (<Word id="chirik" />)
    // }
    // const cholam = () => {
    //     return (<Word id="cholam" />)
    // }
    // const segol = () => {
    //     return (<Word id="segol" />)
    // }
    // const shuruk = () => {
    //     return (<Word id="shuruk" />)
    // }
    // const sentences=()=>{
    //     history.push('/sentences')
    // }
    return (
        <div>
        <button  onClick={()=>setNikud('kamatz')}>kamatz</button>
        <button  onClick={()=>setNikud('chirik')}>kamatz</button>
        <button  onClick={()=>setNikud('cholam')}>kamatz</button>
        <button  onClick={()=>setNikud('segol')}>kamatz</button>
        <button  onClick={()=>setNikud('shuruk')}>kamatz</button>
        </div>
    )
}
export default OneSyllable;