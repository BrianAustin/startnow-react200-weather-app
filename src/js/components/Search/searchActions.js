import axios from 'axios';

export function updateSearchText(searchText) {
  return {
    type: 'UPDATE_SEARCH_TEXT',
    payload: { searchText }
  };
}

export function searchClick(searchText) {
  const apiKey = '8865b8e84dfd6add3f527280db67511e';
  return {
    type: 'SEARCH_CLICK',
    payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + searchText + '&APPID=' + apiKey)
    .then(response => response.data)
  };
}