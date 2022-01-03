import axios from 'axios';
import {popularGamesURL, upComingGamesURL, newGamesURL, searchGameURL } from '../api';

//ACTION CREATOR

export const loadGames = () => async (dispatch) =>{
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const upComingData = await axios.get(upComingGamesURL());
    const newData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upComing: upComingData.data.results,
            newGames: newData.data.results,
        }
    })

}

export const fetchSearch = (game_name) => async(dispatch) =>{
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload:{
            searched: searchGames.data.results,
        },
    });
};