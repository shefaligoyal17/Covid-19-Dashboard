import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderCases=(casedata)=>{
return{
    type:actionTypes.RENDER_CASES,
    casedata:casedata
}

}

export const fetchCasesFailed=()=>{
    return{
        type:actionTypes.FETCH_CASES_FAILED
    }
}

export const fetchCases=()=>{
    return dispatch=>{
    // let interval=setInterval(()=>{
        axios.get('./cases.json'||'https://corona.lmao.ninja/v2/all')
    .then(response=>{
        dispatch(renderCases(response.data));
    })
    .catch(error=>{
        dispatch(fetchCasesFailed());
    })
// },5000);
}
} 