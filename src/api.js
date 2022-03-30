//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  //console.log(month);
  if (month < 10) {
    // If the month date is smaller than 10, ex:1-9, add a zero in front.
    // helps with the api call
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  //console.log(month);
  if (day < 10) {
    // If the month date is smaller than 10, ex:1-9, add a zero in front.
    // helps with the api call
    return `0${day}`;
  } else {
    return day;
  }
};

const HHH = "daead6f258e24d6791a190d12e89f7e0";

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${HHH}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Upcoming games
const upComing_games = `games?key=${HHH}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// New Games
const new_games = `games?key=${HHH}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;

export const upComingGamesURL = () => `${base_url}${upComing_games}`;

export const newGamesURL = () => `${base_url}${new_games}`;

// GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?&key=${HHH}`;

// GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${HHH}`;

//  SEARCHED GAMES
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${HHH}&search=${game_name}&page_size=9`;
