import React,{useEffect} from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
// Styling and animations
import styled from 'styled-components';

import {motion} from 'framer-motion';
// Components
import Game from "../components/Game";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(loadGames());
      //console.log(loadGames());
    }, [dispatch]);
    // Get the data back from the State
    const { popular, newGames, upComing } = useSelector((state) => state.games);  
    return(
        <GameList>
            <h2>Upcoming Games</h2>
                <Games>
                    {upComing.map(game => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id} 
                            //rating={game.rating}
                            image={game.background_image} 
                            key={game.id}
                        />
                    ))}                
                </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 4rem 0rem;
    }    
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
`;

export default Home;
