import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div class="container">
        <div class="row">
         
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

        
          <div class="footer-col">
            <h4>Get started</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Top projects</a></li>
              <li><a href="#">Supported countries</a></li>
            </ul>
          </div>

         

          <div class="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Invest now</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Submit a ticket</a></li>
            </ul>
          </div>

         
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>

          </div>
          </div>

         
  )
}

export default Footer