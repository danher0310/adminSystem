import React, {useEffect, useState} from 'react'
import { Container, Button, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { reset_password } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

function ResetPassword() {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [requestSent, setRequestSent] = useState(false)
  const dispatch = useDispatch()
 
  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(reset_password(email))
    setRequestSent(true)
  }
  useEffect(() => {
    document.title = 'Reset Password';
    if(requestSent){
      history('/')
    }   
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
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
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

export default ResetPassword