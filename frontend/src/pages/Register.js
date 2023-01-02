import {Link} from 'react-router-dom'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/authSlice'


function Register() {

  const [data,setData]=useState({userName:"",email:"",phone:"",password:""})
  const dispatch=useDispatch()
  const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(registerUser(data))
}
  return (
    <Container className='mt-5'>
      <h2 className='shadow-sm p-3 m-5 text-center'>Register</h2>
      <Row>
        <Col lg={5} md={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg'>
          <Form  >
            <Form.Group className='mb-3' controlId='formBasicText'>
              <Form.Control
                type='text'
                placeholder='User name'
                name='userName'
                onChange={handleChange}
              />
            </Form.Group>
           
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicText'>
              <Form.Control
                type='number'
                placeholder='Phone number'
                name='phone'
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
              />
              <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long,
        and must not contain special characters, or emoji.
      </Form.Text>
            </Form.Group>
            <Button variant='primary w-100 mb-3' onClick={(e)=>handleSubmit(e)}>
              register
            </Button>
          </Form>
          <p>
            Have an account ? <Link to='/signin'>Sign in</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
