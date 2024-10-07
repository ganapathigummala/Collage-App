import React,{useState} from 'react'
import '../css/Registration.css'
import axios from 'axios'
import { useNavigate } from 'react-router';

const Registration = () => {

    const navigate = useNavigate();

    const [stundent, setStundent] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        img: ''
    })
    const {name,email,password,phone,address,img} = stundent
  const handleChange = (e) => {
        setStundent({...stundent,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const data=await axios.post('http://localhost:3000/courses',stundent)
        navigate('/student')
       
    }

    


  return (
    <div className='reg'>
       
        <form onSubmit={handleSubmit}> <h1>Registration </h1>
            {/* <label>Name</label> */}
            <input type="text" name='name' value={name} placeholder='Enter Your Name' onChange={handleChange} required></input>
            {/* <label>Email</label> */}
            <input type="text" name='email' value={email} placeholder='Enter Your Email' onChange={handleChange} required></input>
            {/* <label>Password</label> */}
            <input type="password" name='password' value={password} placeholder='Enter Your Password' onChange={handleChange} required></input>
            {/* <label>Phone Number</label> */}
            <input type="text" name='phone' value={phone} placeholder='Enter Your Phone Number' onChange={handleChange} required></input>
            {/* <label>Address</label> */}
            <input type="text" name='address' value={address} placeholder='Enter Your Address' onChange={handleChange} required></input>
            {/* <label>Image</label> */}
            <input type="img" name='img' value={img} placeholder='Image' onChange={handleChange} required></input>
            <div><button id='submit'>Submit</button>
            <button>Cancel</button> </div>
            
        </form>





    </div>
  )
}

export default Registration