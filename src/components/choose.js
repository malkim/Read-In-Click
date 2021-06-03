import React from 'react'
import { useHistory } from "react-router-dom";



const Choose = () => {
    let history = useHistory();
    
    function goToMishkal() {
        history.push('/mishkal')
    }
    return (
        <div>hello</div>
    )
}

export default Choose;