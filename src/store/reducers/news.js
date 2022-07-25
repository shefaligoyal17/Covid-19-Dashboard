import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    news:[],
    error:false
}

const renderNews=(state,action)=>{
    let arr=[];
    arr=action.newsdata;
   return updateObject(state,{
       news:arr
   }) 

}

const fetchNewsFailed=(state,action)=>{
    return updateObject(state,{error:true})
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_NEWS:return renderNews(state,action);
        case actionTypes.FETCH_NEWS_FAILED:return fetchNewsFailed(state,action);
        default:return state;
    }
}
export default reducer;