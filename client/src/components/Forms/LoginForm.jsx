import React, { Fragment } from 'react';
import { Link} from 'react-router-dom'

const LoginForm = ({ UserNameInput,PasswordInput }) => {
 
  return (
    <Fragment>
      <div className="auth">
        <h1>Login</h1>
        <form method='POST' autoComplete='off'>
          <input type={UserNameInput.type} name={UserNameInput.name} placeholder={UserNameInput.placeholder} />
          <input type={PasswordInput.type} name={PasswordInput.name} placeholder={PasswordInput.placeholder} />
          <button>Login</button>
          <p></p>
          <span>Dont have an account? <Link to="/register">Register</Link></span>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginForm;
