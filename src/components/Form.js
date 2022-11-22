import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Auth from '../utils/auth';
import { ADD_RESTAURANT } from '../utils/mutations';
import axios from 'axios';
import { useMutation } from '@apollo/client';

const Form = () => {
    const [categoryData, setCategoryData] = useState('restaurants')
    const [searchInput, setSearchInput] = useState('')
    const [chosenName, setChosenName] =useState('')
    const [chosenPhone, setChosenPhone] =useState('')
    const [chosenLocation, setChosenLocation] =useState('')
    const [chosenPic, setChosenPic] =useState('')
    const [addRestaurant, {error, data}] = useMutation(ADD_RESTAURANT);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   

    const handleSelect = (event) => {
        setCategoryData(event.target.value)
        console.log(categoryData)
    }

    const addToRestaurantDB = async (send) =>{
        console.log(send)

       try {
           const { data }  = await addRestaurant({
                variables: {
                    name: send.name,
                    image_url: send.picture,
                    display_phone: send.display_phone,
                    location: send.location,
                },
            })
            console.log(data)
       } catch (e){
           console.error(e)
           console.log(error)
       }
    }

    const handleFormChange = async (event) => {
       event.preventDefault();

       if(!searchInput) {
        return false;
       }
       

       try {
        await axios({
            url: 'https://graphql77.stepzen.net/api/771c0159ac754c62cdc1c5981d1412f9/__graphql',
            method: 'post',
            data: {
              query: `
                query YelpQueries($yelp_apiKey: Secret!, $query: String, $categories: String) {
                  yelp_search(
                    location: $query
                    categories: $categories
                    limit: 10
                    yelp_apiKey: $yelp_apiKey
                  ) {
                    business {
                      name
                      display_phone
                      photos
                      categories{
                          title
                      }
                      hours{
                          is_open_now
                      }
                      location {
                        formatted_address
                      }
                    }
                  }
                }    
                `,
                variables: {
                  yelp_apiKey : "Jk9Z6Bn-650rcgYjVxFM77AEV-CbVhCyrXCtl4zSOKOVlsQGz3aIXitFQxiN1OZdtjxBuK1D0-FuNEn9f53E32SiyftTXYpWp-0_zxRL8viCdQhVuw9P5UXeXiB8Y3Yx",
                  query: searchInput,
                  categories: categoryData
              }
            }
          }).then((result) => {
            let test = result.data
        
            let final = test.data.yelp_search.business
            //console.log("final", final)

            const foodData = final.map((restaurant) => ({
                name: restaurant.name,
                display_phone: restaurant.display_phone,
                location: restaurant.location.formatted_address,
                picture: restaurant.photos[0]
            }))
            //console.log("foodData",foodData)
            let random = Math.floor(Math.random() * (foodData.length + 1))
            setSearchInput('')
            setChosenName(foodData[random].name)
            setChosenPhone(foodData[random].display_phone)
            setChosenLocation(foodData[random].location)
            setChosenPic(foodData[random].picture)
            handleShow()
            // addToRestaurantDB(foodData[random])
            return final
          });
        } catch (err) {
            console.error(err)
        }
    };
    
    return(
        <div>
            <form onSubmit={handleFormChange}>
                <select className='cuisineForm' onChange={handleSelect}>
                    <option>Cuisine Option</option>
                    <option value="bbq">BBQ</option>
                    <option value="mexican">Mexican</option>
                    <option value="chinese">Chinese</option>
                    <option value="italian">Italian</option>
                    <option value="tradamerican">American</option>
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
        <div className="modal-header">
              <h5 className="modal-title text-light w-100">Let's Eat!</h5>
            </div>
            <div className="modal-body ">
                        <h3 className="modalText">{chosenName}</h3>
                        <img className="restPic" src={chosenPic} alt='restaurant' width="50%"></img>
                        <p className="modalText">{chosenLocation}</p>
                        <p className="modalText">{chosenPhone}</p>
              </div>
                <Modal.Footer>
                <button className="logoutBtn" onClick={handleClose}>
                    Close
                </button>

                {Auth.loggedIn() ? (
                <>
                    <button className="logoutBtn" onClick={handleClose}>
                        Save
                    </button>

                </> 
                ) : (  null )}

                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default Form