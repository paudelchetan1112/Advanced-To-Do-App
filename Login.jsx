import React from 'react'
import { LoginForm } from './components/Login-Form'

const Login = ({mode, handleMode}) => {
  return (
    <div>
      <div className={`w-fit m-auto h-120 my-20 border-2 p-10 rounded-2xl flex items-center justify-center ${mode === "Dark" ? "border-black" : "border-white bg-black text-white"}`}>
        <LoginForm mode={mode} handleMode={handleMode} />
      </div>
    </div>
  )
}

export default Login
