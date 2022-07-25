import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchCountries=(searchdata)=>{
    return{
        type:actionTypes.SEARCH_COUNTRIES,
         searchdata:searchdata
        }
}

export const searchCountriesFailed=(error)=>{
    return{
        type:actionTypes.SEARCH_COUNTRIES_FAILED,
        error:error
    }
}

export const fetchCountriesOnSearch=(value,error)=>{
    return dispatch=>{
        axios.get(`https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=${value}`)
        .then(response=>{
            dispatch(searchCountries(response.data.data.rows[0]));
        })
        .catch(error=>{
           dispatch(searchCountriesFailed(error));
        })
    }
}
