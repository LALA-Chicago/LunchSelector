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

export const ADD_RESTAURANT = gql`
  mutation addRestaurant($name: String!, $image_url: String, $display_phone: String, $categories: String, $location: String) {
    addRestaurant(name: $name, image_url: $image_url, display_phone: $display_phone, categories: $categories, location: $location) {
      restaurant {
        name
        image_url
        display_phone
        categories
        location
      }
    }
  }
`;