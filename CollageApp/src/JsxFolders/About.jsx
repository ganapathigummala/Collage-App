import React from 'react'
import "../css/About.css"

const ABOUT = () => {
  return (
    <div className="trainers-section">
    <h1>Meet Our Expert Trainers at JSPiders Rajajinagar</h1>
    <p>
      At JSPiders Rajajinagar, we take pride in our <strong>highly experienced and dedicated trainers</strong>, who are the backbone of our successful IT training programs. Each trainer brings a wealth of <strong>industry knowledge</strong> and a passion for teaching, ensuring that our students receive the best guidance to excel in their careers.
    </p>

    <section className="why-learn">
      <h2>Why Learn from Our Expert Trainers?</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <h3>1. Industry-Experienced Professionals</h3>
          <p>
            Our trainers have <strong>years of hands-on experience</strong> working with top IT companies. They bring real-world expertise into the classroom, helping you understand how to apply theoretical concepts to industry challenges.
          </p>
        </div>
        <div className="benefit-card">
          <h3>2. Deep Subject Matter Expertise</h3>
          <p>
            Whether it's <strong>Java, Python, Full Stack Development, or Software Testing</strong>, our trainers specialize in specific domains, ensuring you learn from <strong>experts</strong> who know their subjects inside and out.
          </p>
        </div>
      </div>
    </section>

    <section className="personalized-learning">
      <h2>Personalized Learning Approach</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <h3>3. Hands-on Training</h3>
          <p>
            We believe in learning by doing. Our trainers focus on <strong>practical training</strong>, guiding you through coding exercises, live projects, and real-time case studies to prepare you for the IT industry.
          </p>
        </div>
        <div className="benefit-card">
          <h3>4. One-on-One Mentorship</h3>
          <p>
            At JSPiders Rajajinagar, each student gets <strong>personalized attention</strong>. Our trainers provide individual feedback, helping you overcome challenges and ensuring that you stay on track toward your goals.
          </p>
        </div>
      </div>
    </section>

    <section className="career-focus">
      <h2>Focused on Your Career Success</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <h3>5. Interview Preparation & Soft Skills</h3>
          <p>
            Beyond technical skills, our trainers help you build essential <strong>soft skills</strong>. They conduct <strong>mock interviews</strong>, <strong>group discussions</strong>, and <strong>coding assessments</strong> to ensure you're fully prepared for job interviews.
          </p>
        </div>
        <div className="benefit-card">
          <h3>6. Real-Time Project Experience</h3>
          <p>
            Work on <strong>live projects</strong> under the expert guidance of our trainers. These projects simulate real-world scenarios, helping you gain the <strong>practical experience</strong> you need to stand out in job interviews.
          </p>
        </div>
      </div>
    </section>

    <section className="call-to-action">
      <h2>Ready to Learn from the Best?</h2>
      <p>
        At JSPiders Rajajinagar, our expert trainers are committed to <strong>transforming your career</strong> with their unique blend of experience, knowledge, and mentorship. Whether you're looking to <strong>kickstart your career</strong> or take it to the next level, you can trust our trainers to provide the skills and confidence you need to succeed.
      </p>
      <a href="https://www.instagram.com/jspidersrajajinagar_/?hl=en">
      <button className="enroll-btn">Join Us and Start Learning Today!</button>
      </a>
    </section>
  </div>
  )
}

export default ABOUT