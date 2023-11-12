// Définir le type d'action
const BUY_PHONE = 'BUY_PHONE';

// Action creator
let buyPhone = () => {
    return {
        type: BUY_PHONE
    };
}


//Reducer
//(prevState, action)=>newState

const initialState = {
    phones: 5
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_PHONE:
            return{
                ...state,
                phones: state.phones - 1
            }
            break;
        default: return  state
    }
}

const store = Redux.createStore(reducer);
const availablePhones = document.getElementById('count');
availablePhones.innerHTML = store.getState().phones;

document.getElementById('buyPhone').addEventListener('click', function(){
    store.dispatch(buyPhone())
})


store.subscribe(()=>{
    availablePhones.innerHTML = store.getState().phones;
})
