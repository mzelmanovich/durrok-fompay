import { combineReducers} from 'redux';
import jumbotron from './jumbotron';
import albums from './albums';
import genres from './genres';

export default combineReducers({jumbotron, albums, genres});
