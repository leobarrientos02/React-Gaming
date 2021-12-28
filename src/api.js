//Base URL
const base_url = "https://api.rawg.io/api/";


//Getting the date
const getCurrentMonth = () =>{
    const month  = new Date().getMonth() + 1;
    //console.log(month);
    if(month < 10){
        // If the month date is smaller than 10, ex:1-9, add a zero in front.
        // helps with the api call
        return `0${month}`
    } else{
        return month;
    }
};
const getCurrentDay = () =>{
    const day  = new Date().getDate();
    //console.log(month);
    if(day < 10){
        // If the month date is smaller than 10, ex:1-9, add a zero in front.
        // helps with the api call
        return `0${day}`
    } else{
        return day;
    }
};


// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;

