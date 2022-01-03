import React,{useEffect} from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
// Styling and animations
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

// Components
import Game from "../components/Game";
import GameDetail from '../components/GameDetail';

import {useLocation} from 'react-router-dom';

import { fadeIn } from '../animations';

const Home = () => {

    // GET THE CURRENT LOCATION
    const location = useLocation();
    //console.log(location.pathname);
    const pathId = location.pathname.split("/")[2];
    //console.log(path);

    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(loadGames());
      //console.log(loadGames());
    }, [dispatch]);
    // Get the data back from the State
    const { popular, newGames, upComing, searched } = useSelector((state) => state.games);  
    return(
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade"  >
            <AnimatePresence>
                {pathId && GameDetail.name && <GameDetail pathId={pathId} /> }
            </AnimatePresence>
            { searched.length ?  (
            <div className="searched">
                <h2>Searched Games</h2>
                    <Games>
                        {searched.map((game) => (
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
            </div>
            ) : "" }

            <h2>Upcoming Games</h2>
                <Games>
                    {upComing.map((game) => (
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
            <h2>Popular Games</h2>
                <Games>
                    {popular.map((game) => (
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
            <h2>New Games</h2>    
                <Games>
                    {newGames.map((game) => (
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
                </AnimateSharedLayout>                                
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
