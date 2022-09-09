import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context';
const SingleProduct = ({ name, product_id, order_date, quantityOrdered, selling_price, stock, delivered, index }) => {
    const { deliverProduct } = useGlobalContext();
    return <SingleProductContainer index={index}>
        <article>
            <p>Product Name :</p>
            <p>{name}</p>
        </article>

        <article>
            <p>Price :</p>
            <p>${selling_price}</p>
        </article>

        <article>
            <p>Quantity Ordered :</p>
            <p>{quantityOrdered}</p>
        </article>

        <article>
            <p>Amount In Stock :</p>
            <p>{stock}</p>
        </article>

        <article>
            <p>Order Date :</p>
            <p>{order_date}</p>
        </article>

        <button onClick={() => { deliverProduct(product_id) }} className={delivered ? 'delivered' : null}>{delivered ? 'Delivered' : 'Deliver Item'}</button>
    </SingleProductContainer>
}


const SingleProductContainer = styled.article`
     margin-bottom: 2rem;
     border-bottom: ${({ index }) => index ? '1px solid #333' : 'none'};
      article{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        p:nth-child(1){
          background-color: #ff523b55;
          padding: .3rem 1rem;
        }
      }
      button{
        margin-bottom: 1rem;
        padding: .75rem 1.4rem;
        font-size: 1rem;
        color: white;
        border: none;
        background-color: #ff523b;
        border-radius: 0.2rem;
        &.delivered{
            background-color: #ff523b75;
        }
      }
`

export default SingleProduct