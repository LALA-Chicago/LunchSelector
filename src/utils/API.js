
// require('dotenv').config()


// let query = '60634'

// let addons = '&categories=bbq&limit=3'

// query = query.concat(addons)

// var myHeaders = new Headers();
// myHeaders.append("Authorization", 'Bearer 6rWKApRZ2w-J-L3PJ8CeBWRZk96gwXnHbo5jz4s891OcUZYb5OapXqH5CiVGwcBD9_izGbrZF-PVsB5jgF1FW8zTQ4NWzxVUA5RH063Cw8-GGZPrLHJ16WRhr6R1Y3Yx ');

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

const config = {
  headers: {
    Authorization:
      "Bearer 6rWKApRZ2w-J-L3PJ8CeBWRZk96gwXnHbo5jz4s891OcUZYb5OapXqH5CiVGwcBD9_izGbrZF-PVsB5jgF1FW8zTQ4NWzxVUA5RH063Cw8-GGZPrLHJ16WRhr6R1Y3Yx",
  },
  mode: 'no-cors'
}

// export const searchZipCode = (location) => {
//     return fetch(`https://api.yelp.com/v3/businesses/search?location=${location}`);
//   };
  
export const searchZipCode = (query) => {
  return fetch(`https://api.yelp.com/v3/businesses/search?location=${query}`, config
  )};



// export const searchZipCode = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`,);
// };



// https://www.googleapis.com/books/v1/volumes?q=${query}

