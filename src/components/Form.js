import React, { useState } from 'react'
import { searchZipCode } from '../utils/API'

const Form = () => {

    const [searchInput, setSearchInput] = useState('')
    const [searchZip, setSearchZip] = useState([]);

    const handleFormChange = async (event) => {
       event.preventDefault();

       if(!searchInput) {
        return false;
       }

       try {
        const response = await searchZipCode(searchInput);

        if(!response.ok) {
            throw new Error('something went wrong');
        }

        const { items } = await response.json();

        const foodData = items.map((restaurant) => ({
            // bookId: restaurant.volumeInfo.title,
            // bookId: restaurant.id,
            bookId: restaurant.name,
            // display_phone: restaurant.display_phone,
            // location: restaurant.location.display_address[0].concat(', ',restaurant.location.display_address[1])
        }))
        //insert way to pull data from api

        setSearchZip(foodData)
        setSearchInput('')
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} 
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

            <container>
                <h2>
                    {searchZip.length
                    ? `Viewing ${searchZip.length} results:`
                : 'Search for Zip Code to begin'}
                </h2>
            </container>
            <p>
            {searchZip.map((restaurant) => {
                return (
                    <h1>{restaurant.bookId}</h1>
                )
            })}
            </p>
        </div>
    )

}

export default Form