import React from 'react'
import LoginForm from '../components/Forms/LoginForm'

const Login = () => {

  const UserNameInput = {
    name: "email",
    placeholder: "Email",
    type: "text"
  }

  const PasswordInput = {
    name: "password",
    placeholder: "Password",
    type: "password"
  }
  return (
    <LoginForm UserNameInput = {UserNameInput}  PasswordInput = {PasswordInput}/>
  )
}

export default Login