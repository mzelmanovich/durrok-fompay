import { combineReducers} from 'redux';
import jumbotron from './jumbotron';
import albums from './albumsreducer';
import genres from './genresreducer';

export default combineReducers({jumbotron, albums, genres});
