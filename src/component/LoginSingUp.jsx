import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [action, setAction] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async () => {
    try {
      if (action === 'Sign Up' && name !== '' && email !== '' && password !== '') {
        const response = await axios.post('http://localhost:8082/adduser', {
          name,
          email,
          password,
        });

        // Handle success (e.g., show success message, redirect, etc.)
        console.log('Sign-up response:', response.data);
        clearMessages(response.data.body);
        setName('');
        setEmail('');
        setPassword('');
      } else if (action === 'Login' && password !== '' && email !== '') {
        const response = await axios.post('http://localhost:8082/loginuser', {
          email,
          password,
        });

        console.log('Login response:', response.data);
      
        clearMessages(response.data.body);
        setEmail('');
        setPassword('');
      } else {
        clearMessages('Fill All the Info');
        
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      // Handle errors (e.g., show error message)
      clearMessages(error.response?.data || 'An error occurred');
      console.error('Error:', error);
    }
  };

  const handleSignIn = () => {
    setAction('Sign Up');
    setName('');
    setEmail('');
    setPassword('');
    handleSubmit();
  };

  const handleLogin = () => {
    setAction('Login');
    setEmail('');
    setPassword('');
    handleSubmit();
  };

  const clearMessages = (e) => {
 
    setErrorMessage("**"+e+"**");
    setTimeout(() => {
      setErrorMessage('');
    }, 4000);

  };




  return (
    <div className='base'>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          {errorMessage === '' ? (
            <div></div>
          ) : (
            <div style={{ color: 'red', fontSize: '17px' }}>{errorMessage}</div>
          )}
          {action === 'Login' ? (
            <div></div>
          ) : (
            <div className='input'>
              <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          )}
          <div className='input'>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input'>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        {action === 'Sign Up' ? (
          <div></div>
        ) : (
          <div className='forgot-password'>
            Forget password? <span>Click here</span>
          </div>
        )}

        <div className='submit-container'>
          <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={handleSignIn}>
            Sign Up
          </div>
          <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={handleLogin}>
            Login
          </div>
        </div>
        <div className='submit1' onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;






























// import React, { useState } from 'react';
// import './LoginSignUp.css';

// const LoginSignUp = () => {

//     const[action ,setAction] =useState("Sign Up")
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");





//   return (
//     <div className='base'>
//     <div className='container'>
//       <div className='header'>
//         <div className='text'>{action}</div>
//         <div className="underline"></div>
//       </div>
      
//       <div className="inputs">
//        {action==="Login" ? <div></div> : <div className="input">
//           <input type="text" placeholder="Name " value={Name} onChange={(e)->setn}/>
//         </div>
//       }
//      <div className="input">
//           <input type="email"  placeholder=" Email "/>
//         </div>
//       <div className="input">
//           <input type="password"  placeholder="Password " />
//       </div>
//       </div>
//       {action==="Sign Up"?<div></div>:<div className="forgot-password">  Forget password? <span>Click here</span></div>}
      
//       <div className="submit-container">
//         <div className={action==="Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//         <div className={action==="Sign Up" ? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default LoginSignUp;
