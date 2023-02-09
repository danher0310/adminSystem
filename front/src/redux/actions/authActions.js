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
import axios from 'axios';

export const checkAuthenticated =() => async dispatch => {
  if(localStorage.getItem('access')){
    const config = {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        
      }
    };
    const body = JSON.stringify({token: localStorage.getItem('access')});
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
      if(res.status === 200){
        dispatch({
          type: AUTHENTICATED_SUCCESS
        });
      }
      else{
        dispatch({
          type: AUTHENTICATED_FAIL,
          payload: res.status
        })
      }
    } catch (error) {
      dispatch({
        type: AUTHENTICATED_FAIL
      })
    }

  }else{
    dispatch({
      type: AUTHENTICATED_FAIL
    })
  }

}

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

  export const reset_password = (email) => async dispatch => {
    const config ={
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({email});
    try{
      const res = await axios.post(`/auth/users/reset_password/`, body, config)
      dispatch({
        type: PASSWORD_RESET_SUCCESS, 
        payload: res.data

      });

    }catch (err){
      dispatch({
        type: PASSWORD_RESET_FAIL,
      });

    }
  };
  export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config ={
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({uid, token, new_password, re_new_password});

    try{
      const res = await axios.post(`/auth/users/reset_password_confirm/`, body, config)
      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS, 
        payload: res.data

      });

    }catch (err){
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
        
      });

    };

  };


export const logout = () => dispatch =>{
  dispatch({
    type: LOGOUT
  })
}