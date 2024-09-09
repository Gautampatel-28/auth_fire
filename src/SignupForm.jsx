import React from 'react'
import "./SignupForm.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            createUserWithEmailAndPassword(auth, email, password)
            console.log("Account Created")
        }catch(err){
            console.log(err)
        }
    }

  return (
    <>
        <div className="sign-container">
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Signup Form</h2>
                <label htmlFor='email'>
                    Email:-
                    <input type="text" onChange={(e) => setEmail(e.target.value)} required/>
                </label>
                <label htmlFor="password">
                    Password:-
                    <input type="password" onChange={(e) => setPassword(e.target.value)} required/>
                </label>
                <button>Sign Up</button> <br />
                <p>Already Account - <Link to='/login'>Login</Link></p>
            </form>
        </div>
    </>
  )
}

export default SignupForm