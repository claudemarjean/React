import { LOAD_COMMNETS,LOAD_COMMNETS_SUCCESS, LOAD_COMMNETS_ERROR } from "./type";

const initialStateComments = {
    isLoading: false,
    comments: [],
    error: ''
}

const commentReducer = (state = initialStateComments, action) =>{
    switch(action.type){
        case LOAD_COMMNETS:
            return{
                ...state,
                isLoading: true
            }
        case LOAD_COMMNETS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                comments: action.payload,
                error: ''
            }
        case LOAD_COMMNETS_ERROR:
            return{
                ...state,
                isLoading: false,
                comments: [],
                error: action.payload
            }

        default: return state
    }
}

export default commentReducer