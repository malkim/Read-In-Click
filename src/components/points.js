import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const Points = ({ picture, note, isPointKnown }) => {
   
    const [isknown, setIsknown] = useState(isPointKnown);
    const [isnote, setIsnote] = useState(note);

    return (
    <div>
        <img src={""} />
        <Switch
            checked={isknown}
            onChange={(e)=>setIsknown(e.target.checked)}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
  
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="הערה כוללת"
          onChange={(e)=>setIsnote(e.target.value)}
        />
        
  
    </div>)
}

export default Points;