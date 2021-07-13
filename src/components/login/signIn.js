import React from 'react'
import  { useEffect, useState } from "react";
import { signInApi } from "./loginApi";
// const userInput = "malki&shani";
// const passwordInput = "mmmsss";
import {useHistory} from 'react-router-dom'

function SignIn() {

  const [id, setId] = useState('')
  const history = useHistory();

  function goToChoose() {
    history.push("/choose");
  }
  
  useEffect(() => {
    signInApi(user)
      .then(() => {
        history.push('/signIn')
      })
      .catch(() => {
        console.log('--error--');
      })
  }, []);

  let user = { id }
  return (
    <div>
      <div>הכנס מספר זהות</div>
      <input onChange={(e) => { setId(e.target.value) }}></input>
      <button onClick={goToChoose}>כניסה</button>
    </div>)
}
export default SignIn;