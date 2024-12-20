import { useState } from 'react'
import './App.css'
import Business from './components/Business';

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
};

function App() {

  return (
    <>
     <h1>Testing screen</h1>
     <p>This is just a test.</p>
    </>
  )
}

export default App
