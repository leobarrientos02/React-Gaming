import React,{useEffect} from "react";
// REDUX
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gameAction";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(loadGames());
      //console.log(loadGames());
    })
    return(
        <div>
            <h2>Leo</h2>
        </div>
    );
};

export default Home;
