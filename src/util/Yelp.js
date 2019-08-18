const apiKey = '7CG3xAQsJUNyiw1_tXYYssmQTGxt-KcnCtnQJffIln79gUyQQQrseeMwTZrREbHmhfp4TQptDN80DggK59_o6YKWWohkEXxMugeQoPwEYkrjTEnh37nRrqM1R_dYXXYx';

const Yelp = {
  seach( term, location, sortBy ) {
    let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${ term }&location=${ location }&sort_by=${ sortBy }`
    return fetch( url,
      {
        headers: {
          Authorization: `Bearer ${ apiKey }`
        }
      } )
      .then( ( response ) => response.json() )
      .then( ( jsonResponse ) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.reviewCount
            }
          });
        }

      } );
  }
};

export default Yelp;
