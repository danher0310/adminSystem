import React, {useEffect, useState} from 'react'
import { Container, Button, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { reset_password_confirm} from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom' 


const  ResetPasswordConfirm = ({match}) => {
  
  const history = useNavigate()
  const [new_password, setNew_password] = useState('')
  const [re_new_password, setRe_new_password] = useState('')
  const [requestSent, setRequestSent] = useState(false)
  const dispatch = useDispatch()
  const {uid, token} =useParams()
 
  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(reset_password_confirm(uid, token, new_password, re_new_password))
    setRequestSent(true)
  }
  useEffect(() => {
    document.title = 'Reset Password';
    if(requestSent){
      history('/')
    }   
    console.log(uid, token)
  }, [requestSent, history]);
  

  return (
    <div>
      
        <Container>
          <Row>
            <div className='container mt-5 mb-3'>
                <h1 className='text-center mb-3'> Request password reset</h1>
                <Form className="login-form" onSubmit={onSubmit}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter email" 
                      name='email'
                      value={new_password}
                      onChange={(e)=>setNew_password(e.target.value)}
                      required
                    />                    
                  </Form.Group>

                  
                
                  <Button className="content-center" variant="primary" type="submit">
                    Reset Password
                  </Button>
                </Form>
               
              </div>
          </Row>
          <Row>
            <p className='text-center'>
              Don't have an account? <Link to='/singup'>Sign up</Link>
            </p>
            
          </Row>
         
                
        </Container>
      
    </div>
  )
}

export default ResetPasswordConfirm