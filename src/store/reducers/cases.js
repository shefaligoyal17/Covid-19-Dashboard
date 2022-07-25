import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={coronaStats:{
   totalCases:0,
    recovered:0,
    activeCases:0,
    totalDeaths:0
},
error:false
}

const renderCases=(state,action)=>{
    let casedata=action.casedata;
return(updateObject(state,{
       coronaStats:{
        totalCases:casedata.cases,
       recovered:casedata.recovered,
       activeCases:casedata.active,
       totalDeaths:casedata.deaths}
    }
))
}

const fetchCasesFailed=(state,action)=>{
    return(updateObject(state,{error:true}))
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_CASES:return renderCases(state,action);
        case actionTypes.FETCH_CASES_FAILED:return fetchCasesFailed(state,action);
        default:return state;
    }
}
export default reducer;