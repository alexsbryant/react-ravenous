import React, { Component } from 'react'

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Pizzaria Luigi',
    address: '2727 Wadsworth Blvd',
    city: 'Denver',
    state: 'CO',
    zip: '80223',
    category: 'Italian',
    rating: 4.6,
    reviewCount: 90
  };

class Business extends Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                   <img src={business.imageSrc} />
                </div>
                <h2>{business.name}</h2>
                <div className="business-information">
                    <div className="business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state}</p>
                        <p>{business.zip}</p>
                    </div>
                    <div className="business-rating">
                        <p>{business.category}</p>
                        <p>{business.rating}</p>
                        <p>{business.reviewCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;    