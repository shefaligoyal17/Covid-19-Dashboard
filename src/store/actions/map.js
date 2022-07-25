import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderMap=(mapdata)=>{
return{
    type:actionTypes.RENDER_MAP,
    mapdata:mapdata
}

}
export const fetchMapFailed=()=>{
    return {
        type:actionTypes.FETCH_MAP_FAILED
    }
}



export const fetchMapData=()=>{
    return dispatch=>{
    axios.get('./countries.json?limit=200'||'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200')
    .then(response=>{
        dispatch(renderMap(response.data.data.rows));
    })
    .catch(error=>{
      dispatch(fetchMapFailed());
    })
    }
} 