import React from 'react'
import Button from '@material-ui/core/Button';
import './homePage.css'
import { useHistory } from "react-router-dom";
import signUp from './signUp'

const HomePage = () => {
  let history = useHistory();

  function goToNewUser() {
    history.push("/signUp");
  }
  function goToExisttUser() {
    history.push("/signIn");
  }

  return (
    <div>
      <h1 className='title'> Read In Click </h1>
      <br></br>
      <div className='wrrapbt'>
        <Button variant="contained" color="secondary" onClick={goToNewUser}>
          למשתמש חדש
</Button>
        <br></br>
        <br></br>
        <Button variant="contained" color="secondary" onClick={goToExisttUser}>
          למשתמש קיים
</Button>
      </div>
    </div>
  )
}
export default HomePage;