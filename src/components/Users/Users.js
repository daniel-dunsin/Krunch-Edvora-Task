import React from 'react'
import styled from 'styled-components';
import SingleUser from './SingleUser';
import { useGlobalContext } from '../context';
import { FaShuttleVan } from 'react-icons/fa'
const Users = () => {
  const {users} = useGlobalContext();
  console.log(users)
  return users && <UsersContainer className='section-container'>
    <div className="title">
      <h1>Orders <FaShuttleVan /> </h1>
      <p>Current orders yet to be delivered</p>
    </div>

    <div className="users-container">
      {
        users.map(user => {
          return <SingleUser key={user.user_id} {...user} />
        })
      }
    </div>
  </UsersContainer>
}


const UsersContainer = styled.section`
  padding: 2rem;
  .title{
    margin-top: 1rem;
    margin-bottom: 2rem;
    h1{
      font-size: 2.7rem;
      color: #ff523b;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    p{
      font-size: 1rem;
      color: #333;
    }
  }
  .users-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  @media screen and (max-width: 990px) {
    padding: 1rem;
    .title{
      h1{
        font-size: 1.8rem;
      }
    }
    .users-container{
      grid-template-columns: repeat(3,1fr);
    }
  }
  @media screen and (max-width: 700px){
    .users-container{
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 1rem;
    }
  }
  @media screen and (max-width: 450px){
    .users-container{
      grid-template-columns: 1fr;
    }
  }
`

export default Users