import React from 'react'
import {useNavigate} from 'react-router-dom'

const Saved = () => {
    const navigate = useNavigate();
    return(

        <>

        <h1>Saved Restaurants</h1>
        <br></br>
        <button onClick={() => navigate(-1)}>Go Back</button>

        </>
    )
}

export default Saved