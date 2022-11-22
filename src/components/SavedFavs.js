import React, { useState } from 'react';

const SavedFavs = (props) => {

    const [savedStuff,setSavedStuff] = useState([])
    setSavedStuff(props.restaurant)

    // const items = savedStuff.map((place) => {
    //     return (
    //         <li key={place.name}>
    //             <h3>{place.name}</h3>
    //             <img src={place.picture} alt='restaurant' width="50%"></img>
    //             <p>{place.location}</p>
    //             <p>{place.display_phone}</p>
    //         </li>
    //     )
    // })

    // <li key={props.name}>
    //             <h3>{props.name}</h3>
    //             <img src={props.picture} alt='restaurant' width="50%"></img>
    //             <p>{props.location}</p>
    //             <p>{props.display_phone}</p>
    //         </li>

    console.log(props.restaurant)
    return (

        <div className='main'>

            <h1>SAVED RESTAURANTS</h1>

            <h2>{props.restaurant.name}</h2>
            

        </div>
    )


}

export default SavedFavs