import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
   tweets:[],
   error:false
}


const renderTweets=(state,action)=>{
    let arr=[];
    arr=action.tweetsdata;
   return updateObject(state,{
       tweets:arr
   }) 

}

const fetchTweetsFailed=(state,action)=>{
    return updateObject(state,{error:true})
}




const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_TWEETS:return renderTweets(state,action);
        case actionTypes.FETCH_TWEETS_FAILED:return fetchTweetsFailed(state,action);
        default:return state;
    }
}
export default reducer;