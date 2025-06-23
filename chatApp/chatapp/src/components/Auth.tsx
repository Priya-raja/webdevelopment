import React,{useState} from 'react'

enum AuthType {
    Login = 'Login',
    SignUp ='SignUp'
} 


const Auth = () => {
    
    const [authType, setAuthType] = useState<AuthType>(AuthType.SignUp)

  return (
    <div>Auth</div>
  )
}

export default Auth;