import { legacy_createStore as createStore, combineReducers} from 'redux'
import phoneReducer from './phone/reducerPhone'
import tvReducer from './tv/reducerTv';
import commentReducer from './comments/reducerComments';

const rootReducer = combineReducers(
    {
        phone: phoneReducer,
        television: tvReducer,
        comments: commentReducer
    }
)

const store = createStore(rootReducer);

export default store;