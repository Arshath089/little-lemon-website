import React from 'react'
import logo from '../images/Logo .svg'

function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>We are family owned Mediterraneran Restaurant, focused on traditional recipes served with modern twist</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Services</a>
                    </li>
                    <li>
                        <a href='/'>Menu</a>
                    </li>
                    <li>
                        <a href='/'>Reservations</a>
                    </li>
                    <li>
                        <a href='/'>Order Online</a>
                    </li>
                    <li>
                        <a href='/'>Login</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br/> 249 Fourth Lane,USA</li>
                    <li>Phone: <br/> +123 4568 7892</li>
                    <li>Email: <br/> support@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/'>Facebook</a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>Instagram</a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/'>Youtube</a>
                    </li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer