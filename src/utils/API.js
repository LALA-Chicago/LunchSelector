import axios from 'axios'
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



// export const searchZipCode2 = (location) => {
//   axios({
//     url: 'https://graphql77.stepzen.net/api/771c0159ac754c62cdc1c5981d1412f9/__graphql',
//     method: 'post',
//     data: {
//       query: `
//         query YelpQueries($yelp_apiKey: Secret!, $query: String) {
//           yelp_search(
//             location: $query
//             limit: 3
//             yelp_apiKey: $yelp_apiKey
//           ) {
//             business {
//               name
//               display_phone
//               photos
//               categories{
//                   title
//               }
//               hours{
//                   is_open_now
//               }
//               location {
//                 formatted_address
//               }
//             }
//           }
//         }    
//         `,
//         variables: {
//           yelp_apiKey : "6rWKApRZ2w-J-L3PJ8CeBWRZk96gwXnHbo5jz4s891OcUZYb5OapXqH5CiVGwcBD9_izGbrZF-PVsB5jgF1FW8zTQ4NWzxVUA5RH063Cw8-GGZPrLHJ16WRhr6R1Y3Yx",
//           query: location
//       }
//     }
//   }).then((result) => {
//     let test = result.data

//     let final = test.data.yelp_search.business
//     console.log("final", final)
//     return final
//   });
// }

