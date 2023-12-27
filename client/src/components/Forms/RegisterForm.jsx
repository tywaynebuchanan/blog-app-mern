import React, { Fragment } from 'react';
import { Link} from 'react-router-dom'

const RegisterForm = ({ UserNameInput,PasswordInput,NameInput }) => {
 
  return (
    <Fragment>
      <div className="auth">
        <h1>Register</h1>
        <form method='POST' autoComplete='off'>
          <input type={UserNameInput.type} name={UserNameInput.name} placeholder={UserNameInput.placeholder} />
          <input type={PasswordInput.type} name={PasswordInput.name} placeholder={PasswordInput.placeholder} />
           <input type={NameInput.type} name={NameInput.name} placeholder={NameInput.placeholder} />
          <button>Register</button>
          <p></p>
          <span>Have an Account? <Link to="/login">Login</Link></span>
        </form>
      </div>
    </Fragment>
  );
};

export default RegisterForm;
