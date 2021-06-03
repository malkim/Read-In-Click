import React from 'react'
//import { useHistory } from "react-router-dom";
import Word from './word'

const OneSyllable = () => {
    //     let history=useHistory();
    //     const id="";

    const kamatz = () => {
        return (<Word id="kamatz" />)
    }
    const chirik = () => {
        return (<Word id="chirik" />)

    }
    const cholam = () => {
        return (<Word id="cholam" />)

    }
    const segol = () => {
        return (<Word id="segol" />)

    }
    const shuruk = () => {
        return (<Word id="shuruk" />)

    }
    // const sentences=()=>{
    //     history.push('/sentences')

    // }
    return (
        <div>OneSyllable</div>


    )
}
export default OneSyllable;