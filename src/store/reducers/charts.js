import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    chart:{
    confirmed:0,
    recovered:0,
    deceased:0
    },
    error:false
}


const renderCharts=(state,action)=>{
    let stats=action.chartdata;
   return updateObject(state,{
       chart:{
          confirmed:stats.cases,
          recovered:stats.recovered,
          deceased:stats.deaths
       }

   })
}
const fetchChartFailed=(state,action)=>{
    return(updateObject(state,{error:true}))
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_CHARTS:return renderCharts(state,action);
        case actionTypes.FETCH_CHART_FAILED:return fetchChartFailed(state,action);
        default:return state;
    }
}
export default reducer;