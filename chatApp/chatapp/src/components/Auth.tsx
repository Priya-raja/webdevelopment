
import { useState} from 'react'
import {useForm} from 'react-hook-form'

const AuthType = {
    Login: "login",
    SignUp: "signup"
} as const



interface AuthForm {
    email: string;
    password: string;
}



const Auth = () => {
    const [authType, setAuthType] = useState<"login" | "signup">(AuthType.Login);

const {register, handleSubmit, formState: { errors }} = useForm<AuthForm>();
    const onSubmit = (data: AuthForm) => {
        console.log(data);
    }
  return (
    <div className="auth-container">
    
        <h2>{authType === AuthType.Login ? "Login" : "Sign Up"}</h2>
        
      <form onSubmit ={handleSubmit(onSubmit)}>
        <label> Email:</label>
        <input type="text" placeholder="Enter your email" 
        {...register("email", {required: "email is required"})}
        />
        {errors.email && <p className='error-text'> {errors.email.message}</p>}

        <label> Password</label>
        <input type="password" placeholder="Enter your password"
        {...register("password", {required: "password is required", minLength: 6})}
        />
        {errors.password && <p className='error-text'> {errors.password.message}</p>}
        <button type='submit'>
        {authType === AuthType.Login ? "Login" : "Sign Up"} 
        </button>    
            
    </form>

    <div>
        {authType === AuthType.Login ? (
            <p>Don't have an account? <button onClick={() => setAuthType(AuthType.SignUp)} className="auth-link">{AuthType.SignUp}</button></p>
        ) :
            <p>Already have an account? <button onClick={() => setAuthType(AuthType.Login)} className="auth-link">{AuthType.Login}</button></p>
        }
    </div>
    </div>
  )
}

export default Auth