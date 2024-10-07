import React ,{useState}from 'react'
import { Link, Outlet} from 'react-router-dom'
import '../css/Contact.css';

const CONTACT = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
   
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here if needed

    // Handle form submission, e.g., send data to an API
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };
  return (
    <div className='contact'>
      <div>
        <div className='courseOffered'>
          <div><Link to="java" className='linkContact'>Java Developer</Link></div>
          <div><Link to="marn" className='linkContact'>MERN Stack Develope</Link></div>
          <div><Link to="dev" className='linkContact'>DevOps Developerv</Link></div>
        </div>
        <div className='output'>
          <Outlet></Outlet>
        </div>
      </div>
      <div className='contactUs'>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
        <h1>Contact Us</h1>
        
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
  
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
  
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
  
            
  
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="comments">Additional Comments:</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              ></textarea>
            </div>
  
            <button
              type="submit"
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Submit
            </button>
          </form>
       
      </div>
      </div>
    </div>
  )
}

export default CONTACT