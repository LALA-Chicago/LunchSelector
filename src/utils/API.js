

export const searchZipCode = (location) => {
    return fetch(`https://api.yelp.com/v3/businesses/search?location=${location}`);
  };
  