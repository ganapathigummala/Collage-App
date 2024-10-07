import React,{useState} from 'react'
import '../css/Registration.css'
import axios from 'axios'

const Registration = () => {

    const [stundent, setStundent] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
    })
    const {name,email,password,phone,address} = stundent
  const handleChange = (e) => {
        setStundent({...stundent,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const data=await axios.post('http://localhost:3000/courses',stundent)
        setStundent({
            name: '',
            email: '',
            password: '',
            phone: '',
            address: '',
        })
    }

    


  return (
    <div className='reg'>
       
        <form onSubmit={handleSubmit}> <h1>Registration </h1>
            <label>Name</label>
            <input type="text" name='name' value={name} placeholder='Enter Your Name' onChange={handleChange}></input>
            <label>Email</label>
            <input type="text" name='email' value={email} placeholder='Enter Your Email' onChange={handleChange}></input>
            <label>Password</label>
            <input type="password" name='password' value={password} placeholder='Enter Your Password' onChange={handleChange}></input>
            <label>Phone Number</label>
            <input type="text" name='phone' value={phone} placeholder='Enter Your Phone Number' onChange={handleChange}></input>
            <label>Address</label>
            <input type="text" name='address' value={address} placeholder='Enter Your Address' onChange={handleChange}></input>
            <div><button id='submit'>Submit</button>
            <button>Cancel</button> </div>
        </form>





    </div>
  )
}

export default Registration