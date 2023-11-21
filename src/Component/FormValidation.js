import React, { useState } from 'react'
import { useRef } from 'react'
import { signInValidation,signUpValidation } from './Validate'
import { useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';
const FormValidation = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const nameref = useRef(null)
    const passref = useRef(null)
    const emailref = useRef(null)
    const [message, setMessage] = useState()
   const validation = (e) => {
        e.preventDefault()

        if (show) {
         
            console.log("Inside of signup")
            createUserWithEmailAndPassword(auth,emailref.current.value,passref.current.value)
                .then((userCredential) => {
                 
                    const user = userCredential.user;
                    console.log(user)
                    navigate('/home')
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    console.log(errorMessage)
                    setMessage(errorMessage)
                });

        }
        else{
         
            console.log("Inside of signIn")
            signInWithEmailAndPassword(auth, emailref.current.value, passref.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate('/home')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    setMessage(errorMessage)
                });
            }
        }

    return (
        <div>

            <form className='login'>
                <h2>Authentication</h2>
                {show && <input type="text" placeholder='Username' style={{ width: "220px" }} ref={nameref} />}
                <input type="text" placeholder='email' style={{ width: "220px" }} ref={emailref} />
                <input type="password" placeholder='password' style={{ width: "220px" }} ref={passref} />
                

                <h2 style={{ color: 'red' }}>{message}</h2>
                <button onClick={validation}>Login</button>

                <h5>{!show ? "Dont you have an account" : "Already have an account"} <a href='#' onClick={() => setShow(!show)}>
                    {!show ? "Sign UP" : "Sign in"}</a></h5>
            </form>
        </div>
    )
}

export default FormValidation