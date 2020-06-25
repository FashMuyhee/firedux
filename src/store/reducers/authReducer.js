import {SIGN_IN_SUCCESS,SIGN_IN_ERROR,SIGN_OUT,SIGN_UP_SUCCESS,SIGN_UP_ERROR} from '../actions/type'

const initState = {
   authError : null,
   loading:false
}

const authReducer = (state = initState, action) => {
   switch(action.type){
      case SIGN_IN_ERROR:
         console.log('error in login')
         return {
            ...state,
            authError: action.message,
            loading:false
         }
      case SIGN_IN_SUCCESS:
         console.log('success in login ')
         return {
            ...state,
            authError : null,
            loading:false
         }
      case SIGN_UP_ERROR:
         console.log('error in reg')
         return {
            ...state,
            loading:false,
            authError: action.message
         }
      case SIGN_UP_SUCCESS:
         console.log('success in reg ')
         return {
            ...state,
            loading:false,
            authError : null
         }
      case SIGN_OUT:
         console.log('logged out ')
         return state
      default :
         return state
   }
}

export default authReducer; 