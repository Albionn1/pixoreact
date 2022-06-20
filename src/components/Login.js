import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";

const Login = () => {
  return (
    <>
    <MDBContainer style={{width:'21%'}}>
      <MDBRow>
        <MDBCol md="center" style={{marginTop: '40%'}}>
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                placeholder="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                className='mb-4'
              />
              <MDBInput
                placeholder="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
              <div className='mt-2'>
                <a style={{textDecoration:'none'}} href='/ForgotPassword'>
                  <i className='' style={{color:'#080F0F', paddingRight:'50px', fontSize:'.9rem'}}>Forgot password?</i>
                  </a>
              <a style={{textDecoration:'none'}} href='/Register'>
                <i className='' style={{color:'#E33F27', fontSize:'.9rem'}}>Create an account</i>
              </a>
              </div>
            </div>
            <div className="text-center mt-4">
              <MDBBtn>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
};

export default Login
