import React from 'react'
import styles from "./Business.module.css";

const Business = ({ business }) => {
        return (
            <div className={styles.Business}>
                <div className={styles.ImageContainer}>
                   <img src={business.imageSrc} alt="" />
                </div>
                <h2>{business.name}</h2>
                <div className={styles.BusinessInformation}>
                    <div className={styles.BusinessAddress}>
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{`${business.state} ${business.zipCode}`}</p>
                    </div>
                    <div className={styles.BusinessRating}>
                        <h4>{business.category.toUpperCase()}</h4>
                        <h4 className={styles.rating}>{`${business.rating} stars`}</h4>
                        <p>{`${business.reviewCount} reviews`}</p>
                    </div>
                </div>
            </div>
        );
    };


export default Business;    