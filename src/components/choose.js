import React from 'react'
import { useHistory } from "react-router-dom";



const Choose = () => {
    let history = useHistory();
    
    function goToMishkal() {
        history.push('/mishkal')
        //console.log('mishkal')
    }
    return (<div>
        <button onClick={goToMishkal}>משקל</button>
        <button >כפתור 2</button>
        <button>כפתור 3</button>
        <button>כפתור 4</button>
        <button>כפתור 5</button>
        <button>כפתור 6</button>
        <div>hello</div>
 </div>   
 )
}

export default Choose;