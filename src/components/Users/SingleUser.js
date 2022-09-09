import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';
const SingleUser = ({ user_id, name }) => {

    return <SingleUserContainer>
        <div className="username">
            <div>
                <i><FaUser /></i>
                <h3>{name}</h3>
            </div>
            <Link to={`/user/${user_id}`}>Check Orders</Link>
        </div>
        <div className="user-socials">
            <a href="https://www.facebook.com">
                <i><FaFacebook /></i>
            </a>
            <a href="https://www.whatsapp.com">
                <i><FaWhatsapp /></i>
            </a>
            <a href="https://www.linkedin.com">
                <i><FaLinkedin /></i>
            </a>
        </div>
    </SingleUserContainer>

}


const SingleUserContainer = styled.article`
    background-color: white;
    padding: 1rem;
    box-shadow: 0 5px 4px rgba(0,0,0,0.1);
    border-radius: .4rem;
    .username{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:.5rem;
        margin-bottom: 2rem;
        & > div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
        cursor: pointer;
        i{
            color: royalblue;
        }
        h3{
            font-size: 1.05rem;
        }
    }
    .user-socials{
        display: flex;
        justify-content: space-evenly;
        a{
            font-size: 1.5rem;
            &:nth-child(1){
            color: royalblue;
            }
            &:nth-child(2){
            color: darkgreen;
            }
            &:nth-child(3){
            color: royalblue;
            } 
        }
        
    }
`

export default SingleUser