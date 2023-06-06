import React from 'react'
import './bidsubmition.css'
const BidSubmition = () => {
  return (
    <div>
          {/* <header>
				<h1>Welcome to Egyptian Tendering</h1>
				<nav>
				  <ul class="nav-links">
						<li><a href="index.html">Home Page</a></li>
						<li><a href="about.html" >About Us</a></li>
						<li><a href="Tenders.html">Find Tenders</a></li>
						<li><a href="Bid.html">Bid Submission</a></li>
						<li><a href="FAQs.html">FAQs</a></li>
					</ul>
				</nav>
			<div class="auth-links">
			  <a href="signup.html" class="signup-btn">Sign Up</a>
			  <a href="login.html" class="login-btn">Login</a>
		  </div>
			</header> */}
      <div className='container'>
      <h1>Bid Submission Form</h1>
      <form action="">
      <label for="first-name">First Name:</label>
			<input type="text" id="first-name" name="first-name" required/>

			<label for="last-name" >Last Name:</label>
			<input type="text" id="last-name" name="last-name" required/>

			<label for="organization-name">Organization Name:</label>
			<input type="text" id="organization-name" name="organization-name" required/>

			<label for="insert" >Insert Bid Document:</label>
			<input type="file" id="insert" name="insert" required/>

			<label for="description">Description:</label>
			<textarea id="description" name="description" maxlength="280" required></textarea>

			<label for="tender-id">Tender ID:</label>
			<input type="text" id="tender-id" name="tender-id" required/>

			<button type="submit">Submit Bid</button>
      </form>
      </div>
{/*       <footer>
        <div class="footer-section">
          <p >About Us</p>
          <p>Egyptian Tendering is an online information system website that provides information about tendering opportunities in Egypt.</p>
        </div>
        <div class="footer-section">
          <p >Contact Us</p>
          <p>Email: contact@egyptiantendering.com</p>
          <p>Phone: +20123456789</p>
        </div>
        <div class="footer-section">
          <p >Having privacy concerns?
          View <a href="privacy.html" >Privacy Policy</a> here.</p>
        </div>
      </footer> */}
    </div>
  )
}

export default BidSubmition
