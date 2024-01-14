import { LOAD_COMMNETS,LOAD_COMMNETS_SUCCESS, LOAD_COMMNETS_ERROR } from "./type";

const  loadApiComments = () =>{
    return{
        type: LOAD_COMMNETS
    }
}

const  loadCommentsSuccess = comments =>{
    return{
        type: LOAD_COMMNETS_SUCCESS,
        payload: comments
    }
}

const  loadCommentsError = error =>{
    return{
        type: LOAD_COMMNETS_ERROR,
        payload: error
    }
}

export const apiCall = () =>{
    return ()=>{
         
    }
}