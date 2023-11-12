import React, { useState } from 'react'
import { useRef } from 'react'
import { signInValidation,signUpValidation } from './Validate'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const FormValidation = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const nameref = useRef('')
    const passref = useRef('')
    const emailref = useRef('')
    const [message, setMessage] = useState()
    console.log(nameref)
    const validation = (e) => {
        e.preventDefault()

        if (show) {
            const mess = signUpValidation(nameref.current.value, passref.current.value, emailref.current.value)
            if (mess) {
                setMessage(mess)
            }
            else {
                navigate('/home')}

        }
        else {
            const mess = signInValidation(nameref.current.value, passref.current.value)

            if (mess) {
                setMessage(mess)
            }
            else {
                navigate('/home')
            }    }
        if (show) {
            const auth = getAuth();
            console.log("Inside of signup")
            createUserWithEmailAndPassword(auth, nameref.current.value, passref.current.value, emailref.current.value)
                .then((userCredential) => {
                 
                    const user = userCredential.user;
                    console.log(user)
                    
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
            const auth = getAuth();
            console.log("Inside of signIn")
            signInWithEmailAndPassword(auth, nameref.current.value, passref.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
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
                <input type="text" placeholder='Username' style={{ width: "220px" }} ref={nameref} />
                <input type="password" placeholder='password' style={{ width: "220px" }} ref={passref} />
                {show && <input type="text" placeholder='email' style={{ width: "220px" }} ref={emailref} />}

                <h2 style={{ color: 'red' }}>{message}</h2>
                <button onClick={validation}>Login</button>

                <h5>{!show ? "Dont you have an account" : "Already have an account"} <a href='#' onClick={() => setShow(!show)}>
                    {!show ? "Sign UP" : "Sign in"}</a></h5>
            </form>
        </div>
    )
}

export default FormValidation