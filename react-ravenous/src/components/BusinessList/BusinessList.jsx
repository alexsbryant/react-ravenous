import React, { Component } from 'react'
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

class BusinessList extends Component {
  render() {
    return (
      <div className={styles.BusinessList}>
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