import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm'

const Register = () => {
  const UserNameInput = {
    name: "email",
    placeholder: "Email",
    type: "email"
  }

  const PasswordInput = {
    name: "password",
    placeholder: "Password",
    type: "password"
  }

  const NameInput = {
    name: "name",
    placeholder: "Name of User",
    type: "text"
  }
  return (
    <RegisterForm NameInput = {NameInput} UserNameInput = {UserNameInput}  PasswordInput = {PasswordInput}/>
  )
}

export default Register