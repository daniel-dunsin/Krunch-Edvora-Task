import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  {
    url: '/',
    text: 'Home'
  },
  {
    url: '/orders',
    text: 'Orders'
  },
]

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const linksContainerParent = useRef(null);
  const linksContainer = useRef(null);

  useEffect(() => {
    const linksHeight = linksContainer.current.getBoundingClientRect().height;
    if (isNavOpen) {
      linksContainerParent.current.style.height = `${linksHeight}px`
    } else {
      linksContainerParent.current.style.height = 0;
    }
  }, [isNavOpen])

  return <NavContainer className='section-container'>
    <div className="navbar-brand">
      <h1>Krunch</h1>
      <div className="menu-icon" onClick={() => { setIsNavOpen((prev) => !prev) }}>
        {
          isNavOpen ? <FaTimes /> : <FaBars />
        }
      </div>
    </div>
    <div className="links-container" ref={linksContainerParent}>
      <ul ref={linksContainer}>
        {
          links.map((link, index) => <li className='nav-item' key={index}>
            <Link to={link.url} className='nav-link'>{link.text}</Link>
          </li>)
        }
      </ul>
    </div>
  </NavContainer>
}


const NavContainer = styled.nav`
  padding: 1rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navbar-brand{
    cursor: pointer;
    font-size: 1.5rem;
    .menu-icon{
      display: none;
    }
  }
  .nav-item{
    display: inline-block;
    margin: 0 1rem;
    .nav-link{
      text-decoration: none;
      color:black;
      transition: .3s;
      
    }
  }
  @media screen and (max-width: 990px) {
    padding: 0rem;
    display:block;
    .navbar-brand{
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menu-icon{
        display: block;
      }
    }
    .links-container{
      overflow: hidden;
      transition: .3s;
      ul{
        box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
        .nav-item{
        display: block;
        margin: 0;
        padding: 0.625rem;
        }
      }
    }
    
  }
  @media screen and (min-width: 990px){
    .links-container{
      height: auto !important;
    }
  }
`

export default Navbar