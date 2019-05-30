import fetch from 'cross-fetch'
import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    PRODUCTS_FAIL,
    ADD_CAFFEINE,
} from './types'


export const fetchProducts = () => dispatch => {

    dispatch({
        type: PRODUCTS_REQUEST
    })

    // 404 test 
    // const url = 'http://www.mocky.io/v2/5c5dd6a9320000530040b2d4'
    // delay test 
    // const url = 'http://www.mocky.io/v2/5c5dd6733200005d0040b2d3?mocky-delay=5000ms'
    
    const url = 'http://www.mocky.io/v2/5cf00a45300000dd9c3cd4a7'

    fetch(url)
        .then(response => response.json())
        .then(json => dispatch({
            type: PRODUCTS_SUCCESS,
            payload: json
        })).catch(error => dispatch({
            type: PRODUCTS_FAIL,
            error: error
        }));

}

export const addCaffeine = (value) => (dispatch) => {

    dispatch({
        type: ADD_CAFFEINE,
        payload: value
    })

}