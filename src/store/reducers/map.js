import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    map:[],
    error:false
}


const renderMap=(state,action)=>{
    let arr=[];
    arr=action.mapdata;
   return updateObject(state,{
       map:arr
   }) 

}
const fetchMapFailed=(state,action)=>{
    return updateObject(state,{error:true})
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_MAP:return renderMap(state,action);
        case actionTypes.FETCH_MAP_FAILED:return fetchMapFailed(state,action);
        default:return state;
    }
}
export default reducer;