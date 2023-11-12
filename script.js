// Définir le type d'action
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';
const BUY_TV = 'BUY_TV';

// Action creator
let buyPhone = () => {
    return {
        type: BUY_PHONE
    };
}

let buyTablet = () =>{
    return {
        type: BUY_TABLET
    }
}

let buyTv = () =>{
    return {
        type: BUY_TV
    }
}


//Reducer
const initialStatePhones = {
    phones: 5,
    tablet: 10
}

const initialStateTv = {
    tv : 20
}

const phonesReducer = (state = initialStatePhones, action) =>{
    switch(action.type){
        case BUY_PHONE:
            return{
                ...state,
                phones: state.phones - 1
            }
        case BUY_TABLET:
                return{
                    ...state,
                    tablet: state.tablet - 1
                }
        default: return  state
    }
}

const tvReducer = (state = initialStateTv, action) =>{
    switch(action.type){
        case BUY_TV:
            return{
                ...state,
                tv: state.tv - 1
            }
        default: return  state
    }
}

//combine reducer
const rootReducer = Redux.combineReducers({
    phone: phonesReducer,
    tv: tvReducer

})

//créer le store
const store = Redux.createStore(rootReducer);

//récupérer la data du store
const availablePhones = document.getElementById('count');
const availableTablet = document.getElementById('countTab');
const availableTv = document.getElementById('countTv');
availablePhones.innerHTML = store.getState().phone.phones;
availableTablet.innerHTML = store.getState().phone.tablet;
availableTv.innerHTML = store.getState().tv.tv;

document.getElementById('buyPhone').addEventListener('click', function(){
    store.dispatch(buyPhone())
})

document.getElementById('buyTablet').addEventListener('click', function(){
    store.dispatch(buyTablet())
})

document.getElementById('buyTv').addEventListener('click', function(){
    store.dispatch(buyTv())
})

//listener
store.subscribe(()=>{
    availablePhones.innerHTML = store.getState().phone.phones;
    availableTablet.innerHTML = store.getState().phone.tablet;
    availableTv.innerHTML = store.getState().tv.tv;
})
