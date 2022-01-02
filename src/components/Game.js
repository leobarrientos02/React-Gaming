import React from "react";
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import {Link} from 'react-router-dom';

const Game = ({ name, released, image, id }) => {
  // LOAD DETAIL
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  }

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 4px;
    transition: all ease 1s;
    &:hover{
      /* height: 40.5vh;
      width: 102%; */
      transform: scale(1.05);
    }
  }
`;

export default Game;
