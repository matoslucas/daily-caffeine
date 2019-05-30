import { combineReducers } from 'redux'

import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  ADD_CAFFEINE,
} from '../actions/types'

const initialState = {
  products: []
}

const emporium = (state = initialState, action) => {
  switch (action.type) {
      case PRODUCTS_REQUEST:
          return {
              ...state
          }
      case PRODUCTS_SUCCESS:
          return {
              ...state,
              products: action.payload.products
          }

      case PRODUCTS_FAIL:
          return {
              ...state,
              error: action.error
          }
          
    case ADD_CAFFEINE:
    console.log(action)
          return {
              ...state,
              caffeine: action.payload
          }

      default: return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
      case PRODUCTS_REQUEST:
          return true;
      case PRODUCTS_FAIL:
          return false;
      case PRODUCTS_SUCCESS:
          return false;
      default: return state
  }
}

export default combineReducers({
  emporium,
  isFetching,
})