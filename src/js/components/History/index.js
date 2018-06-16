import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    searchText: store.search.searchText,
    history: store.search.history,
    data: store.search.data
  };
}

export default connect(mapStoreToProps)(History);