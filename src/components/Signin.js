import React, { useState } from 'react'

const Signin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const formHandler =async (e) => {
        e.preventDefault()

        const data = {
            email,
            password
        }

        try {
            const response = await fetch('http://localhost:8001/signin',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json()
            console.log("Server response ", result)
            if(response.ok){
                window.location.href = '/'
            }
        } catch (error) {
            console.log("Error ", error)
        }
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

                <h2>Sign in</h2>
                <form action='/signin' method='post' style={{marginTop:'20px'}}>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={formHandler}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signin
