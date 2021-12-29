import axios from 'axios';
import {popularGamesURL, upComingGamesURL, newGamesURL } from '../api';

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