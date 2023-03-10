import{
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  LOGOUT
} from '../constants'

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated:null,
  user:null
};

export default function auth( state = initialState, action){
  const {type, payload}= action;
  switch(type){
    case AUTHENTICATED_SUCCESS:
      return{
        ...state,
        isAuthenticated: true
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh',payload.refresh)
      return{
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh          
      }
    case LOAD_USER_SUCCESS:
      return{
        ...state, 
         user: payload
      }
    case AUTHENTICATED_FAIL:
      return{
        ...state,
        isAuthenticated: false
      }
    case LOAD_USER_FAIL:
      return{
        ...state,
        user: null
      }
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      return{
        ...state,
        access: null,
        refresh:null,
        isAuthenticated: false,
        user: null
      }
      case PASSWORD_RESET_SUCCESS:
      case PASSWORD_RESET_FAIL:
      case PASSWORD_RESET_CONFIRM_SUCCESS:
      case PASSWORD_RESET_CONFIRM_FAIL:
        return{
          ...state
        }
      
      
      
    default:
      return state
  }
}