import axios from 'axios'
import React,{useEffect, useState} from 'react'
import '../css/Student.css'
import { Link } from 'react-router-dom'

const Student = () => {
 
  const [student, setStudent] = useState([])

  useEffect(() => {
    fetchData()
  }, [student])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/courses')
      setStudent(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/courses/${id}`)
     
    } catch (error) {
      console.error('Error deleting student:', error)
    }
  }
 

  return (
    <div className='table'>
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
       </thead>
       <tbody>
        {
          student.map((item)=>(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.password}</td>
              <td><Link to={`/edit/${item.id}`}><button className='edit' >Edit</button></Link></td>
              <td><button onClick={()=>{
                handleDelete(item.id)
              }} className='delete'>Delete</button></td>
             
             
              
            </tr>
          ))
        }
       </tbody>
      </table>
    </div>
  )
}

export default Student