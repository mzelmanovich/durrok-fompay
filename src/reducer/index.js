import { combineReducers} from 'redux';
import albums from './albums';
import genres from './genres';
import loggedInUser from './loggedInUser';
import review from './review';
import cart from './cart';

export default combineReducers({albums, genres, loggedInUser, cart, review});
