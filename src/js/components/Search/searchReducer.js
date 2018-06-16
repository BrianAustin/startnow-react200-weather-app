const defaultState = {
  searchText: '',
  lon: '',
  lat: '',
  icon: '',
  temp: '',
  pressure:'',
  humidity: '',
  temp_min: '',
  temp_max: '',
  windSpeed: '',
  id: '',
  name: '',
  noResult: true,
  pending: false,
  selectedCity: '',
  history: []
};

export default function searchReducer (state = defaultState, action) {
  const { type, payload } = action;
  const date = new Date();
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let dateFormatted = month + '/' + day + '/' + year;  
  let timeFormatted = hour + ':' + minute + ':' + second;

  switch (type) {
    case 'UPDATE_SEARCH_TEXT': {
      return {
        ...state,
        searchText: payload.searchText
      };
    }

    case 'UPDATE_HISTORY': {
      return {
        history: [
          ...state.history,
          {
            city: payload.searchText,
            date: dateFormatted,
            time: timeFormatted
          }
        ]
      };
    }

    case 'SEARCH_CLICK_PENDING': {
      return {
        ...state,
        pending: true  
      };
    }

    case 'SEARCH_CLICK_FULFILLED': {
      return {
        ...state,
        lon: payload.coord.lon,
        lat: payload.coord.lat,
        icon: payload.weather[0].icon,
        temp: payload.main.temp,
        pressure:payload.main.pressure,
        humidity: payload.main.humidity,
        temp_min: payload.main.temp_min,
        temp_max: payload.main.temp_max,
        windSpeed: payload.wind.speed,
        id: payload.id,
        name: payload.name,
        noResult: false,
        pending: false,
      };
    }

    case 'SEARCH_CLICK_REJECTED': {
      return {
        ...state,
        noResult: true,
        pending: false,
        selectedCity: ''
      }
    }

    default: {
      return state;
    }
  }
}