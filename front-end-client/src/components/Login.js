import React, { useState } from "react"
import axios from "axios"
const Login = () => {

  // const [username, changeUsername] = useState("")
  // const [password, changePassword] = useState("")
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const onChange = (event) => {
    credentials[event.target.name] = event.target.value
  }

  const login = (event) => {
    console.log(credentials)
    axios.post('http://127.0.0.1:8000/auth/',
      credentials)
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <h1>User Login Form</h1>
      <label>
        Username :
          <input type='text' name='username' onChange={onChange} />
      </label>
      <br />
      <br />
      <label>
        Password :
          <input type='password' name='password' onChange={onChange} />
      </label>
      <br />
      <br />
      <button onClick={login}>Login</button>

    </div>
  );
}

export default Login;
