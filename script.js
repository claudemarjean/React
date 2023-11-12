// Définir le type d'action
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';

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


//Reducer

const initialState = {
    phones: 5,
    tablet: 10
}

const reducer = (state = initialState, action) =>{
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

//créer le store
const store = Redux.createStore(reducer);

//récupérer la data du store
const availablePhones = document.getElementById('count');
const availableTablet = document.getElementById('countTab');
availablePhones.innerHTML = store.getState().phones;
availableTablet.innerHTML = store.getState().tablet;

document.getElementById('buyPhone').addEventListener('click', function(){
    store.dispatch(buyPhone())
})
document.getElementById('buyTablet').addEventListener('click', function(){
    store.dispatch(buyTablet())
})


store.subscribe(()=>{
    availablePhones.innerHTML = store.getState().phones;
    availableTablet.innerHTML = store.getState().tablet;
})
