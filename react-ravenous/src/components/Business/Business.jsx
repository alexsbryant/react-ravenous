import React, { Component } from 'react'

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                   <img src={this.props.business.image} />
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="business-information">
                    <div className="business-address">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.state}</p>
                        <p>{this.props.business.zip}</p>
                    </div>
                    <div className="business-rating">
                        <p>{this.props.business.category}</p>
                        <p>{this.props.business.rating}</p>
                        <p>{this.props.business.reviewCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;    