import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

type AuthState = 'SIGNUP' | 'LOGIN';

interface AuthFormData {
  email: string;
  password: string;
}

const Auth = () => {
    const [auth, setAuth] = useState<AuthState>('LOGIN');

    const {register, handleSubmit, 
      formState: {errors},

    }
     = useForm<AuthFormData>();
  
    const onSubmit = () => {
    //authentication
    }
  return (
    <div className='auth-container'>
        <h2> {auth === 'SIGNUP' ? 'SignUp' : 'Login'}</h2>

        <form onSubmit={handleSubmit(onSubmit)}> 
          <label>Email : </label>
          <input type="email" 
          {...register('email', {required: 'Email is required '})}  
          />
          {errors.email && <p className='error-text'>{errors.email.message}</p>}

          <label>Password : </label>
          <input type="password" 
               {...register('password', {required: 'Password is required '})}  
          />
  {errors.password && <p className='error-text'>{errors.password.message}</p>}
          <button type = 'submit'>
            {auth === 'LOGIN' ?'Login' : 'SignUp'}
          </button>

         
          
        </form>
         <div>
          {auth === 'LOGIN' ? (
            <p> You don't have acount ? 
            <button onClick={()=>setAuth('SIGNUP')}> SignUp</button> </p> 
            )
          :
           ( <p> Already have account? <button onClick={()=>setAuth('LOGIN')}> Login </button></p>)
          
          }
          
         </div>
            
        
          


    </div>
  )
}
export default Auth
