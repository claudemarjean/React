import { LOAD_COMMNETS,LOAD_COMMNETS_SUCCESS, LOAD_COMMNETS_ERROR } from "./type";

const  loadApiComments = () =>{
    return{
        type: LOAD_COMMNETS
    }
}

const  loadCommentsSuccess = () =>{
    return{
        type: LOAD_COMMNETS_SUCCESS
    }
}

const  loadCommentsError = () =>{
    return{
        type: LOAD_COMMNETS_ERROR
    }
}