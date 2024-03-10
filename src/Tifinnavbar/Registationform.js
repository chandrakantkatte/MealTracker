import React from 'react';
import './Registationform.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Registationform( {handleClose2 }) {


  const showloginform=()=>
  {
    handleClose2();
  }
  return (
    <MDBContainer fluid className='mainshow'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='mdbcardbody2'>
        <MDBCardBody className='mdbcardbody'>
          <h2 className="regform" >Create an account</h2>
          <MDBInput placeholder='Full Name' size='m' id='form1' type='text' className='flex-column-reverse' />
          <MDBInput  placeholder='Your Email' size='m' id='form2' type='email' className='flex-column-reverse'/>
          <MDBInput placeholder=' Address' size='m' id='form1' type='text' className='flex-column-reverse' /> 
    
          <MDBInput wrapperClass='mb-4' placeholder='Password' size='m' id='form3' type='password' className='flex-column-reverse'/>
          <MDBInput wrapperClass='mb-4' placeholder='Repeat your password' size='m' id='form4' type='password' className='flex-column-reverse'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>

          <div className='text-center'>
            <p className='mb-0'>
              All Ready  have an account?{' '}
              <span
                role="button"
                tabIndex={0}
                onClick={showloginform}
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                Login
              </span>
            </p>
          </div>
        </MDBCardBody>
       

      </MDBCard>

     
    </MDBContainer>
  );
}

export default Registationform;