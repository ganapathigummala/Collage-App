import React ,{useState}from 'react'
import '../css/Course.css'
    


const Java = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      course: '',
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
      <div >
        <h2>Java Developer</h2>
        {submitted ? (
          <div>
            <h3>Thank you for submitting the form!</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='form'>
            <div>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                
              />
            </div>
  
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                
              />
            </div>
  
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
  
            <div>
              <label htmlFor="course">Select Course:</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="Java Development">Java Developer</option>
                <option value="Web Development">Web Development</option>
                <option value="Python Development">Python Development</option>
                <option value="Software Testing">Software Testing</option>
              </select>
            </div>
  
            <div>
              <label htmlFor="comments">Additional Comments:</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
  
            <button
              type="submit"
             
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  };

export default Java