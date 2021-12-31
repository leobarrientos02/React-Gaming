import React from "react";
// Styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Game = ( { name, released, image }) =>{
    return(
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.1);
  text-align: center;
  border-radius: 4px;
  img{
    width:100%;
    height: 40vh;
    object-fit: cover;
    border-radius:4px;
  }  
`;

export default Game;