//action
const BUY_PHONE = 'BUY_PHONE';

let buyPhone = () =>{
    return{
        {
            type: BUY_PHONE
        }
    }
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