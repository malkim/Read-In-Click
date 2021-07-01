import React, { useState, useEffect } from 'react'
import { signUpApi } from './loginApi'
import { useHistory } from 'react-router-dom'

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [id, setId] = useState('')
    const [status, setStatus] = useState('')

    const history = useHistory();

    signUp = () => {
        signUpApi({ user })
            .then(() => {
                history.push('/signUp')
            })
            .catch(() => {
                console.log('--error--');
            })
    }
    let user = { firstName, lastName, id, status }

    return (<div>
        <div >הכנס שם פרטי</div>
        <input onChange={(e) => { setFirstName(e.target.value) }} />
        <div>הכנס שם משפחה</div>
        <input onChange={(e) => { setLastName(e.target.value) }}></input>
        <div>הכנס מספר זהות</div>
        <input onChange={(e) => { setId(e.target.value) }}></input>
        <div>הכנס סטטוס</div>
        <input onChange={(e) => { setStatus(e.target.value) }}></input>
        <button onClick={signUpApi()}>לשמירת הנתונים</button>
    </div>)
}

export default SignUp;