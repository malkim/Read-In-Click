import React from 'react'
import Button from '@material-ui/core/Button';
import './homePage.css'
import { useHistory } from "react-router-dom";





const Home=()=>{
    let history = useHistory();

    function goToRate() {
        history.push("/rate");
      }
    
    
    return (
   <div>
    <div className='title'> Read In Click </div>
      <br></br>
      <div className='wrrapbt'>
      <Button variant="contained" color="secondary" onClick={goToRate}>
  למשתמש חדש
</Button>
<br></br>
<br></br>
<Button variant="contained" color="secondary">
למשתמש קיים
</Button>
        </div>
        </div>
    )
}
export default Home;