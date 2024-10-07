import React from 'react'
import "../css/About.css"

const ABOUT =  () => {
  return (
      <div className="about-container">
          <h1>About JSPiders Rajajinagar</h1>
          <p>
              JSPiders Rajajinagar is a leading software training institute, 
              known for shaping the careers of thousands of students across India. 
              We specialize in providing high-quality training in various domains 
              such as Java, Full Stack Development, Data Structures, Web Technologies, 
              and more.
          </p>

          <section className="vision-mission">
              <h2>Our Vision</h2>
              <p>
                  To be a global leader in the training industry, imparting cutting-edge 
                  technologies and preparing students for a successful career in the 
                  IT sector.
              </p>

              <h2>Our Mission</h2>
              <p>
                  To provide comprehensive training to bridge the gap between 
                  academic learning and industry needs. We aim to enhance the 
                  employability of our students by equipping them with the skills 
                  required to succeed in today's competitive job market.
              </p>
          </section>

          <section className="training-highlights">
              <h2>Why Choose Us?</h2>
              <ul>
                  <li>Experienced trainers with industry expertise</li>
                  <li>Hands-on practical sessions and real-time projects</li>
                  <li>State-of-the-art infrastructure and learning resources</li>
                  <li>100% placement assistance with a proven track record</li>
              </ul>
          </section>

          <section className="contact-details">
              <h2>Contact Us</h2>
              <p>Location: Rajajinagar, Bangalore, Karnataka</p>
              <p>Email: info@jspiders.com</p>
              <p>Phone: +91 1234 567890</p>
          </section>
      </div>
  );
}

export default ABOUT