import { combineReducers} from 'redux';
import albums from './albums';
import genres from './genres';
import loggedInUser from './loggedInUser';

export default combineReducers({albums, genres, loggedInUser});
