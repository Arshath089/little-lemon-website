import React from 'react'
import logo from '../images/restaurant.jpg'

function About() {
  return (
    <div className='about'>
        <div className='about-description'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Welcome to Little Lemon Restaurant, a family-owned Mediterranean restaurant where tradition meets innovation. With a passion for authentic flavors, we bring you time-honored Mediterranean recipes passed down through generations, each dish carefully crafted with the finest ingredients. Our menu celebrates the vibrant, wholesome cuisine of the Mediterranean, served with a modern twist to delight your taste buds and create a memorable dining experience.</p>
        </div>
        <div className='about-img'>
            <img src={logo} alt=''/>
        </div>
    </div>
  )
}

export default About