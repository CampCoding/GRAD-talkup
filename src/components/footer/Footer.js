import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle,AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return <>
  <footer>
    <div className="container">
    <div className="row text-start">
    <div className="col-md-3">
       <p>Egyptian Tendering</p>
      </div>
      <div className="col-md-3">
        <h5>quick links</h5>
        <div className="colu">
        <span>Things</span>
        </div>
        <div className="colu">
        <span>Places</span>
        </div>
      </div>
      <div className="col-md-3">
      <h5>Our support</h5>
      <div className="colu">
      <span>About Us</span>
        </div>

        <div className="colu">
        <span>Contact US</span>
        </div>
      </div>


      <div className="col-md-3 ">
      <h5>Newslatter</h5>

          <div className="colu pb-2">
      <span>subscribe now to get daily updates</span>
        </div>

        <div className="colu-e g-0 p-0 m-0">
        <input type="email" placeholder='Email Address' />
        <button >Send</button>
        </div>
      </div>

    </div>
    </div>
    <ul className='social-icon '>
{/*         <li><i class="fa-brands fa-facebook-f"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-linkedin"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li> */}
        <a href="https://www.facebook.com/profile.php?id=100092319427746&mibextid=LQQJ4d" target='_blank'>
        <BsFacebook style={{
          color:'white'
        }}/>
        </a>
{/*         <a href="">
        <AiFillTwitterCircle
        style={{
          color:'white'
        }}/>
        </a> */}
        <a href="https://www.linkedin.com/in/egyptian-tendering-499575274" target='_blank'>
        <FaLinkedin
        style={{
          color:'white'
        }}/>
        </a>
        <a href="https://instagram.com/egyptiantendering?igshid=YmMyMTA2M2Y=" target='_blank'>
        <AiFillInstagram
        style={{
          color:'white'
        }}/>
        </a>
    </ul>
    <p className='text-muted'>Copyright </p>

  </footer>
  </>
}
