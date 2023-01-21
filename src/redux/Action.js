import { ADD_ITEM } from './ActionTypes';
export const addToCart = data => ({
    type: ADD_ITEM,
    payload: data,
});
