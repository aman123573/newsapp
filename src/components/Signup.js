import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    
    const formHandler = async(e) => {
        e.preventDefault()

        const data = {
            name,
            email,
            password
        }

        try {
            const response = await fetch('http://localhost:8001/signup',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // const result = await response.json()
            // console.log("Server response ", result)
            if(response.ok){
                navigate = '/'
            }
            else{
                console.log("Sign up failed")
            }
        } catch (error) {
            console.log("Error ", error)
        }

        setName('')
        setEmail('')
        setPassword('')
        alert('Successfully Signed Up')

    }


    return (
        <>
            <div className="container mt-10" style={
                {
                    marginTop: '150px',
                    maxWidth: ' 40%',
                    height: '40vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',


                }}>

                <h2>Sign up</h2>
                <form action='/signup' method='post' style={{marginTop:'20px'}}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="name" className="form-control" id="name" aria-describedby="name" value={name} onChange={(e)=> setName(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={formHandler}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup
