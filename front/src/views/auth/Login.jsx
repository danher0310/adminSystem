import React, {useEffect, useState} from 'react'
import { Container, Button, Form, Row } from 'react-bootstrap';
import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
function Login() {
  useEffect(() => {
    document.title = 'Login';
  }, []);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(`${process.env.REACT_APP_API_URL}`)
    dispatch(login(email, password))
  }

  return (
    <div>
      <Layout>
        <Container>
          <Row>
            <div className='container mt-5 mb-3'>
                <h1 className='text-center mb-3'> Sing In</h1>
                <p className='text-center mb-3'>Sing into your account</p>
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

                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      name='password'
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      minLength='6'
                      required
                    />
                  </Form.Group>
                
                  <Button className="content-center" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
               
              </div>
          </Row>
          <Row>
            <p className='text-center'>
              Don't have an account? <Link to='/singup'>Sign up</Link>
            </p>
            <p className='text-center'>
              Forgot your password?  <Link to='/reset-password'>Reset Password</Link>
            </p>
          </Row>
         
                
        </Container>
      </Layout>  
    </div>
  )
}

export default Login