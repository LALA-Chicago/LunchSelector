import React, { useState } from 'react'
import { searchZipCode2 } from '../utils/API'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Form = () => {

    const [searchInput, setSearchInput] = useState('')
    const [searchZip, setSearchZip] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   


    const handleFormChange = async (event) => {
       event.preventDefault();

       if(!searchInput) {
        return false;
       }
       handleShow()

       try {
        const response = await searchZipCode2(searchInput);

        
        const { items } = response.json();

        console.log("items", items)

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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Eat</Modal.Title>
                </Modal.Header>
                    <Modal.Body></Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
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