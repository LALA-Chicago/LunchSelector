import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        password
      }
    }
  }
`;

export const ADD_TO_COLLECTION = gql`
  mutation addToCollection($restaurantName: String!, $email: String!) {
    addToUserCollection(restaurantName: $restaurantName, email: $email) {
      username
      favoritesRestaurant {
        _id
      }
    }
}
`;


export const ADD_RESTAURANT = gql`
  mutation Mutation($name: String!, $imageUrl: String, $displayPhone: String, $location: String) {
    addRestaurant(name: $name, image_url: $imageUrl, display_phone: $displayPhone, location: $location) {
      name
      image_url
      location
      display_phone
    }
  }
`