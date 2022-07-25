import * as actionTypes from './actionTypes';
import axios from 'axios';

export const renderCharts=(chartdata)=>{
return{
    type:actionTypes.RENDER_CHARTS,
    chartdata:chartdata
}

}

export const fetchChartFailed=()=>{
    return{
        type:actionTypes.FETCH_CHART_FAILED
    }
}
export const fetchCharts=()=>{
    return dispatch=>{
   
    axios.get('./chart.json'||'https://corona.lmao.ninja/v2/historical/all')
    .then(response=>{
        dispatch(renderCharts(response.data));
    })
    .catch(error=>{
        dispatch(fetchChartFailed());
    })
}
} 