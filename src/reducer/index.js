import { combineReducers} from 'redux';
import albums from './albums';
import genres from './genres';

export default combineReducers({albums, genres});
