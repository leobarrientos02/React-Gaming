import React from 'react';
// STYLING AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
// REDUx
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
// IMAGE SIZE REDUCER
import { smallImage } from '../util';

// IMPORTING IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

import StarRatingComponent from 'react-star-rating-component';

const GameDetail = ({ pathId }) =>{
    const navigate = useNavigate();
    //Exit Detail
    const exitDetailHander = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            navigate('/');
        }
    };
    
    // GET PLATFORM IMAGES
    const getPlatform = (platform) =>{
        if (platform.includes("PlayStation")) {
            return playstation;
          } else if (platform.includes("Xbox")) {
            return xbox;
          } else if (platform === "PC") {
            return steam;
          } else if (platform === "Nintendo Switch") {
            return nintendo;
          } else if (platform.includes("OS")) {
            return apple;
          } else {
            return gamepad;
          }
    }
    // GET PLATFORM URL
    const getPlatformURL = (platform) =>{
        if (platform.includes("PlayStation")) {
            return "https://www.playstation.com/en-us/";
          } else if (platform.includes("Xbox")) {
            return "https://www.xbox.com/en-US";
          } else if (platform === "PC") {
            return "https://store.steampowered.com/";
          } else if (platform === "Nintendo Switch") {
            return "https://www.nintendo.com/";
          } else if (platform.includes("OS")) {
            return "https://www.apple.com/";
          } else {
            return "https://www.omfgdogs.com/#";
          }
    }    


    // DATA
    const  {screen, game, isLoading } = useSelector((state) => state.detail);
    return(
        <>
        {!isLoading && (
        <CardShadow 
            className="shadow" 
            onClick={exitDetailHander}
        >
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        <Stars>
                            <StarRatingComponent
                                name="Rating"
                                value={game.rating}
                                starCount={5}
                                renderStarIconHalf={1} 
                                editing={false}
                                emptyStarColor="#696969"
                                starColor="#ff0000"
                            />
                        </Stars>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map((data) => (
                                <a href={getPlatformURL(data.platform.name)} target="_blank" rel="noreferrer">
                                    <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name} title={data.platform.name} />
                                </a>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image} />
                </Media>
                <Description>
                    <motion.p layoutId={`description ${pathId}`}>{game.description_raw}</motion.p>
                </Description>
                <h3>Screenshots</h3>
                <div className="gallery">
                    {screen.results.map((image) => (
                        <img src={smallImage(image.image, 1280)} key={image.id} alt={screen.image} />
                    ))}
                </div>
                <Info2>
                    {/* <h4>ESRB Rating</h4>
                    <div className="esrb">
                            if(game.esrb_rating.name == "null"){
                                <p>None</p>
                            }else{
                                <p>{game.esrb_rating.name}</p>
                            }
                    </div> */}
                    <h4>Genres</h4>
                    <div className="genres">
                        {game.genres.map((genre) => (
                            <div className="genre" key={genre.id}>
                                <p>
                                    {genre.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <h4>Developers</h4>
                    <div className="developers">
                        {game.developers.map((developer) => (
                            <div className="developer" key={developer.id}>
                                <p>
                                    {developer.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <h4>Publishers</h4>
                    <div className="publishers">
                        {game.publishers.map((publisher) => (
                            <div className="publisher" key={publisher.id}>
                                <p>
                                    {publisher.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <h4>Tags</h4>
                    <Tags>
                        {game.tags.map((tag) => (
                            <Tag key={tag.id}>
                                <p>
                                    {tag.name}
                                </p>
                            </Tag>
    
                        ))}
                    </Tags>                    
                    
                </Info2>

            </Detail>
        </CardShadow>
        )}
        </>
    );
};


const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;


const Info2 = styled(motion.div)`
    h4{
        margin: 1rem 0rem;
    }
`;
const Tags = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

const Tag = styled(motion.div)`
    p{
        font-size: 1rem;
        padding: .25rem .5rem;
        background: #696969;
        color: white;
        border-radius: 10px;
        margin: .5rem .75rem;
    }
`;

const Stars = styled(motion.div)`
    font-size: 2rem;
`;

export default GameDetail;