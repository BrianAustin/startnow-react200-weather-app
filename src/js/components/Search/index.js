import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    searchText: store.search.searchText,
    data: store.search.data
  };
}

export default connect(mapStoreToProps)(Search);