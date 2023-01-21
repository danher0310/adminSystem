import{
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL
} from '../constants'
import axios from 'axios';

export const load_user =() => async dispatch =>{
  if(localStorage.getItem('access')){
    const config = {
      headers:{
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
        
      }
    };
    try {
      const res = await axios.get(`/auth/users/me/`, config);
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data
        
      })
    } catch (error) {
      dispatch({
        type: LOAD_USER_FAIL,
       
      },console.log(error))
      
    }
  }
  else{
    dispatch({
      type: LOAD_USER_FAIL,
    })
  }


  

};

export const login =(email, password) => async dispatch =>{
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'

    }
  };
  const body = JSON.stringify({email, password})
  try {
    const res = await axios.post(`/auth/jwt/create/`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
      
    })
    dispatch(load_user())
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error
    })
    
  }


};