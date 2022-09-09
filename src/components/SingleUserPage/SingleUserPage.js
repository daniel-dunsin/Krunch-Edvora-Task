import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import styled from 'styled-components';
import SingleProduct from './SingleProduct';
const SingleUserPage = () => {
  const {getSingleUser} = useGlobalContext();
  const {id} = useParams();
  const user = getSingleUser(id);
  return <SingleUserContainer className='section-container'>
    <div className="title">
      <h1>{user.userName}</h1>
      <div className="underline">
        <span></span>
        <span></span>
      </div>
    </div>

    <div className='products-ordered'>
      <h1>Products Ordered</h1>
      {
        user.orderedProducts.map((product, index)=>{
          return <SingleProduct key={index} {...product} index={index == user.orderedProducts.length - 1 ? false: true} />
        })
      }
    </div>
  </SingleUserContainer>
}


const SingleUserContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap:1rem;
  padding: 1rem;
  .title{
    flex: 1;
  margin-bottom: 1rem;
    h1{
      font-size: 3.5rem;
      color: #ff523b;
    }
    .underline{
      width: 180px;
      height: 6px;
      background-color: #999;
      border-radius: 30px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        flex: 1;
        width: 100%;
        height: 100%;
        &:nth-child(1){
          background-color: #ff523b;
        }
      }
    }
  }
  .products-ordered{
    flex: 1;
    margin-top: 2rem;
    h1{
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width:990px) {
    flex-direction: column;
  }
`

export default SingleUserPage