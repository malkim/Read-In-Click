import React from 'react'
import Word from '../onesyllable/word'

const SameVowel = () => {
    const kamatz = () => {
        return (<Word id="kamatzKamatz" />)
    }
    const chirik = () => {
        return (<Word id="chirikChirik" />)

    }
    const cholam = () => {
        return (<Word id="cholamCholam" />)

    }
    const segol = () => {
        return (<Word id="segolSegol" />)

    }
    const shuruk = () => {
        return (<Word id="shurukShuruk" />)

    }
    return (
        <div>SameVowel</div>
    )
}
export default SameVowel;