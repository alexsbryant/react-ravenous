import React from 'react';

function Business() {
    const sampleBusiness = {
        image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Pizzaria Leopold',
        address: '2727 Wadsworth Blvd',
        city: 'Denver',
        state: 'CO',
        zip: '80223',
        category: 'Italian',
        rating: 4.6,
        reviewCount: 90
    }
  return (
    <div>
        <img src={sampleBusiness.image} />
        <h3>{sampleBusiness.name}</h3>
        <p>{sampleBusiness.address}</p>
        <p>{sampleBusiness.city}</p>
        <p>{sampleBusiness.state}</p>
        <p>{sampleBusiness.zip}</p>
        <p>{sampleBusiness.category}</p>
        <p>{sampleBusiness.rating}</p>
        <p>{sampleBusiness.reviewCount}</p>
    </div>
  )
}

export default Business;    