import React from "react";
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  // LOAD DETAIL
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  }

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 4px;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export default Game;
