import React from 'react'
import Button from '@material-ui/core/Button';
import './homePage.css'
import { useHistory } from "react-router-dom";
import signUp from './signUp'

const HomePage = () => {
  let history = useHistory();

  function goToChoose() {
    history.push("/choose");
  }
  function goToNewtUser() {
    history.push("/signUp");
  }


  return (
    <div>
      <h1 className='title'> Read In Click </h1>
      <br></br>
      <div className='wrrapbt'>
        <Button variant="contained" color="secondary" onClick={goToNewtUser}>
          למשתמש חדש
</Button>
        <br></br>
        <br></br>
        <Button variant="contained" color="secondary" onClick={goToChoose}>
          למשתמש קיים
</Button>
      </div>
    </div>
  )
}
export default HomePage;