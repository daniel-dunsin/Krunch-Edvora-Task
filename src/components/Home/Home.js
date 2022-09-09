import React from 'react'
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import homeImg from '../../assets/image 3.jpg';
import Navbar from '../Navbar';
const Home = () => {
  return <HomeContainer>
    <Navbar />
    <div className="home-container section-container">
      <div className="home-content">
        <p className='discount'><i><FaStar /></i> 20% discount on currently</p>
        <h1>Order At The Comfort Of Your Home</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quam nulla magni nemo architecto voluptates.</p>
        <button>Order Now</button>
      </div>
      <div className="home-img">
        <img src={homeImg} alt="hero" />
      </div>
    </div>
  </HomeContainer>
}


const HomeContainer = styled.section`
  min-height: 100vh;
  .home-container{
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 1rem;
    .home-content{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .discount{
        font-size: .85rem;
        padding: 1rem 1.5rem;
        background-color: lightgray;
        max-width: max-content;
        display: flex;
        gap: 1rem;
        border-radius: .5rem;
        text-transform:uppercase;
        font-weight: bold;
        i{
          color: #ff523b;
        }
      }
      h1{
        font-size: 3rem;
        color:#ff523b;
      }
      p{
        font-size: .85rem;
        color: #333;
      }
      button{
        background-color: #ff523b;
        padding: 1rem 1.5rem;
        color: white;
        border-radius: .5rem;
        border:none;
        max-width: max-content;
        font-size: 1rem;
      }
    }
    .home-img{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 100%;
        border-radius: .5rem;
      }
    }
  }
  @media screen and (max-width: 550px) {
    .home-container{
      flex-direction: column-reverse;
      margin-top: 2rem;
      .home-content{
        h1{
          font-size: 1.8rem;
        }
      }
    }
  }
`

export default Home