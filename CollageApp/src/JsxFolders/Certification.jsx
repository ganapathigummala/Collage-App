import React,{useState,useEffect} from 'react'
import axios from 'axios'



const CERTIFICARTIFICATIONS = () => {

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
  return (
    <div className='imgages'>
       {
          student.map((item)=>(
            <img src={item.img} alt="img"  />
          
          ))
        }
    </div>

  )
}

export default CERTIFICARTIFICATIONS