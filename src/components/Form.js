import React, { useState } from 'react'
import { searchZipCode } from '../utils/API'

const Form = () => {

    const [searchInput, setSearchInput] = useState([])
    const [searchZip, setSearchZip] = useState('');

    const handleFormChange = async (event) => {
       event.preventDefault()

       if(!searchZip) {
        return false;
       }

       try {
        const response = await searchZipCode(searchZip);

        if(!response.ok) {
            throw new Error('something went wrong');
        }

        const { items } = await response.json();

        const foodData = items.map((restaurant) => ({
            restaurantId: restaurant.id,
            name: restaurant.name,
            display_phone: restaurant.display_phone,
            location: restaurant.location.display_address[0].concat(', ',restaurant.location.display_address[1])
        }))
        //insert way to pull data from api

        setSearchInput(foodData)
        setSearchZip('')
    } catch (err) {
        console.error(err)
    }
};

        

    return(
        <div>
            <form onSubmit={handleFormChange}>
                <select className='cuisineForm'>
                <option>Cuisine Option</option>
                <option>Mexican</option>
                <option>Italian</option>
                <option>Chinese</option>
                </select>
                <br></br>
                <br></br>
                <input className='zipField'
                value={searchZip}
                onChange={(e) => setSearchZip(e.target.value)} 
                placeholder='Zip Code'
                type="text"
                />
                <br></br>
                <br></br>
                <input className='randomBtn'
                type="submit"
                value="RANDOMIZE"
                />
            </form>
        </div>
    )

}

export default Form