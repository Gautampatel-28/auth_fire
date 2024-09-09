import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            signInWithEmailAndPassword(auth, email, password)
            console.log("Login Successfully")
        }catch(err){
            console.log(err)    
        }
    }

  return (
    <>
        <div className="sign-container">
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <label htmlFor='email'>
                    Email:-
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="password">
                    Password:-
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button>Login Up</button> <br />
                <p>Don't have an Account ? <Link to='/signup'>Register</Link></p>
            </form>
        </div>
    </>
  )
}

export default Login;