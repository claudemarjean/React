import axios from "axios";
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
    return dispatch =>{
        dispatch(loadApiComments())

         axios.get ('https://jsonplaceholder.typicode.com/comments')
         .then(res =>{
            dispatch(loadCommentsSuccess(res.data))
         })
         .catch(error=>{
            dispatch(loadCommentsError(error.message))
         })
    }
}