import React, { Component } from 'react'
import Business from '../Business/Business';

class BusinessList extends Component {
  render() {
    return (
      <div className="business-list">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    )
  }
}

export default BusinessList;