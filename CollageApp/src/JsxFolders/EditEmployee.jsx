import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios';


const EditEmployee = () => {

    const{id}=useParams();

    const navigate = useNavigate();

    const [stundent, setStundent] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        img: ''
    })

    const {name, email, password, phone, address, img} = stundent;




    const fetchData = async() => {
        const data = await axios.get(`http://localhost:3000/courses/${id}`)
        setStundent(data.data);
        
    }

    useEffect(()=>{
        fetchData();
    }, [id])


    const handleChange = (e) => {
        setStundent({...stundent,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const data=await axios.put(`http://localhost:3000/courses/${id}`,stundent)
        navigate(`/student`)
       
    }

     
  return (
    <div className='reg'>
       
    <form onSubmit={handleSubmit}> <h1>Updation </h1>
        <label>Name</label>
        <input type="text" name='name' value={name} placeholder='Enter Your Name' onChange={handleChange} required></input>
        <label>Email</label>
        <input type="text" name='email' value={email} placeholder='Enter Your Email' onChange={handleChange} required></input>
        <label>Password</label>
        <input type="password" name='password' value={password} placeholder='Enter Your Password' onChange={handleChange} required></input>
        <label>Phone Number</label>
        <input type="text" name='phone' value={phone} placeholder='Enter Your Phone Number' onChange={handleChange} required></input>
        <label>Address</label>
        <input type="text" name='address' value={address} placeholder='Enter Your Address' onChange={handleChange} required></input>
        <label>Image</label>
        <input type="img" name='img' value={img} placeholder='Image' onChange={handleChange} required></input>
        <div><button id='submit'>Update</button>
        <button>Cancel</button> </div>
        
    </form>





</div>
  )
}

export default EditEmployee