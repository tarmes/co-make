import React from 'react';


const Footer = () => {
    return ( 
    
    <div>
    <footer className="footer">
    <div className="footer-text">
      <h4>CO|MAKE</h4>
      <p style={{fontSize: '14px'}}>Make your voice heard on the issues you would like to see resolved in your community.</p>
      <p id="bold" >Be Heard Be Bold</p>
    </div>
      <div className='footer-icons'>
            <a href="https://github.com/Co-make-tt76" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square fa-3x"></i>
            </a>
            <a href="https://twitter.com/search?q=%23urbanimprovements&src=typed_query" target="_blank" rel="noopener noreferrer"> 
            <i className="fab fa-twitter-square fa-3x"></i>
            </a>
            <a href="https://www.facebook.com/regenerativearchitecture/" target="_blank" rel="noopener noreferrer"> 
            <i className="fab fa-facebook-square fa-3x"></i>
            </a>
            <a href="https://www.instagram.com/urbanstreetdreams/?hl=en" target="_blank" rel="noopener noreferrer"> 
            <i className="fab fa-instagram-square fa-3x"></i>
            </a>
    </div>
    
  
</footer>

    </div> );
}
 
export default Footer;