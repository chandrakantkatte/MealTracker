// LoginForm.js
import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCheckbox } from 'mdb-react-ui-kit';
import './Loginform.css';

function LoginForm({ handleClose }) {

const showRegistration=  ()=>
{
  handleClose();
  
}


  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='mdbcardbody1' >
        <MDBCardBody className='mdbcardbody3'>
          <h2 className="regform" >Login</h2>
          <MDBInput placeholder='Your Email' size='m' id='form2' type='email' className='flex-column-reverse' />
          <MDBInput placeholder='Password' size='m' id='form3' type='password' className='flex-column-reverse' />
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Remember me' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>
            Login
          </MDBBtn>
          <div className='text-center'>
            <p className='mb-0'>
              Don't have an account?{' '}
              <span
                role="button"
                tabIndex={0}
                onClick={showRegistration}
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                Sign up
              </span>
            </p>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default LoginForm;
