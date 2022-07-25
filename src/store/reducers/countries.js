import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
    countries:[],
    error:false
}


const renderCountries=(state,action)=>{
    let arr=[];
    // arr=state.countries.concat(action.countrydata);
    arr=action.countrydata;
   return updateObject(state,{
       countries:arr
   }) 

}

const fetchCountriesFailed=(state,action)=>{
    return updateObject(state,{error:true})
}

// const searchCountries=(state,action)=>{
//     let array=[];
//     array=action.searchdata;
//     return updateObject(state,{
//         countries:array
//     })

// }


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_COUNTRIES:return renderCountries(state,action);
        case actionTypes.FETCH_COUNTRIES_FAILED:return fetchCountriesFailed(state,action);
        // case actionTypes.SEARCH_COUNTRIES:return searchCountries(state,action);
        default:return state;
    }
}
export default reducer;