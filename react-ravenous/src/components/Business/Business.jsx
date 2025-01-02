import React, { Component } from 'react'
import styles from "./Business.module.css";

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
            <div className={styles.Business}>
                <div className={styles.ImageContainer}>
                   <img src={business.imageSrc} />
                </div>
                <h2>{business.name}</h2>
                <div className={styles.BusinessInformation}>
                    <div className={styles.BusinessAddress}>
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{`${business.state} ${business.zip}`}</p>
                    </div>
                    <div className={styles.BusinessRating}>
                        <h4>{business.category.toUpperCase()}</h4>
                        <h4 className={styles.rating}>{`${business.rating} stars`}</h4>
                        <p>{`${business.reviewCount} reviews`}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;    