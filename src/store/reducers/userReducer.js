import { LOG_USER_IN, LOG_USER_OUT } from "../variables";

const initialState = {
   isLoggedIn: false
}

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOG_USER_IN:
         return {
            ...state,
            isLoggedIn: true
         }
      case LOG_USER_OUT: 
         return {
            ...state,
            isLoggedIn: false
         }
      default:
         return state;
   }
}