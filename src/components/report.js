import React from 'react'
import Points from './points'
import { Button } from '@material-ui/core';

const Report = () => {
const pointsArr = [{ name: "קמץ", isKnown: false, picture: "images/....png" }, { name: "פתח", isKnown: true, picture: "images/....png" }];
    return (      
        <div>
            {pointsArr.map((point) => <Points picture={""} isPointKnown={point.isKnown} note={point.isnote}  />)}
            
   
            <Button>שמירה</Button>
        </div>
    )
}
export default Report;