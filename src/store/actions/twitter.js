import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderTweets=(tweetsdata)=>{
return{
    type:actionTypes.RENDER_TWEETS,
    tweetsdata:tweetsdata
}

}
export const fetchTweetsFailed=()=>{
    return {
        type:actionTypes.FETCH_TWEETS_FAILED
    }
}

export const fetchTweets=()=>{
    return dispatch=>{
    axios.get('./tweets.json')
    .then(response=>{
        dispatch(renderTweets(response.data.tweets));
    })
    .then(error=>{dispatch(fetchTweetsFailed())
    })
    }
} 