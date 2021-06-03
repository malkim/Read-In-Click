import React from 'react'
import './newUser.css'
import { useHistory } from 'react-router-dom'
const NewUser=()=>{

  let history = useHistory();

  const newUser = () => {
    history.push('/newUser')
}
    return (<div className="genericDiv">
      <div className="internalDiv"> שם פרטי </div>
      <input></input>
      <div className="internalDiv">שם משפחה</div>
      <input></input>
      <div className="internalDiv">מספר זהות</div>
    <input></input>

    </div>  
  )}

  export default NewUser; 
