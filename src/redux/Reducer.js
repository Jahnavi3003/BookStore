import { ADD_ITEM } from "./ActionTypes";

const initialState = {
    book: [],
}

export const reducer = (state= initialState,action) => {
    switch(action.type){
        case ADD_ITEM:
                return {
                  book:  [...state, action.payload]
                };
        default: 
            {
            return state;
            }
    }
}