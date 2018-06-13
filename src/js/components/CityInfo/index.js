import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {
    searchText: store.search.searchText,
    data: store.search.data
  };
}

export default connect(mapStoreToProps)(CityInfo);