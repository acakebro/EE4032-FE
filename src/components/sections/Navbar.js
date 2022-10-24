import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import { Button } from './Button';
import './Navbar.css'
import Home from './Home';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

  useEffect(()=> {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  const [walletAddress, setwalletAddress] = useState();

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  setwalletAddress(accounts[0]);
  }

  }

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="home" className='navbar-logo' spy={true} smooth={true} offset={-80} duration={500} onClick={closeMobileMenu}>
          TRUEPNL  <i className="fa-solid fa-globe"></i>
        </Link>
        {/* <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa solid fa-xmark' : 'fa-solid fa-bars'}/>
        </div> */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="about" spy={true} smooth={true} offset={-20} duration={500} className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
             <li  className='nav-item'>
            <Link to="getstarted" spy={true} smooth={true} offset={10} duration={500} className='nav-links' onClick={closeMobileMenu}>
              Get Started
            </Link>
          </li>
          <li className='nav-item'>
           <Link to="projects" spy={true} smooth={true} offset={10} duration={500} className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>

        </ul>
        {/* {!walletAddress && (<Button buttonStyle='btn--outline' onClick={connectWallet}>
        Connect Wallet
      </Button>)} */}
      {/* <div>
        <Home walletAddress={walletAddress}></Home>
      </div> */}
      </div>
    </nav>

    </>
  )
}

export default Navbar