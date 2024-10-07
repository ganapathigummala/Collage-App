import React from 'react';
import '../css/Administration.css'; // Importing the CSS from the css folder

const Administration = () => {
  return (
    <div className="administration-section">
      <h1>Administration Team</h1>
      <p>
        The administration team at JSPiders Rajajinagar ensures smooth and effective functioning of all operations. Our team is dedicated to providing the best resources, infrastructure, and support to both students and staff, ensuring an optimal learning environment.
      </p>

      <section className="admin-roles">
        <h2>Meet Our Administration Team</h2>
        <div className="admin-grid">
          <div className="admin-card">
            <h3>Chief Administrative Officer</h3>
            <p>
              Our Chief Administrative Officer oversees all operations and ensures that all aspects of our training programs are functioning effectively. With years of experience in managing educational institutions, the officer ensures a seamless learning journey for every student.
            </p>
          </div>
          <div className="admin-card">
            <h3>Operations Manager</h3>
            <p>
              The Operations Manager is responsible for managing day-to-day tasks, coordinating between various departments, and ensuring that the institute's infrastructure meets the needs of our students and staff.
            </p>
          </div>
        </div>
      </section>

      <section className="admin-support">
        <h2>Administrative Support</h2>
        <div className="admin-grid">
          <div className="admin-card">
            <h3>Student Support Services</h3>
            <p>
              Our student support team is available to assist students with enrollment, certification, and any queries related to their courses. We ensure that our students have the best experience during their time at JSPiders Rajajinagar.
            </p>
          </div>
          <div className="admin-card">
            <h3>Facilities & IT Support</h3>
            <p>
              The Facilities & IT Support team ensures that the institute’s technological infrastructure is always up-to-date and functional. They help maintain the classroom environment and provide technical assistance whenever needed.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-administration">
        <h2>Contact Our Administration Team</h2>
        <p>
          If you have any queries or need assistance, feel free to reach out to our administration team. We're here to support you throughout your learning journey!
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default Administration;
