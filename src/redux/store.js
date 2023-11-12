import { legacy_createStore as createStore} from 'redux'
import phoneReducer from './phone/reducerPhone'

const store = createStore(phoneReducer);

export default store;