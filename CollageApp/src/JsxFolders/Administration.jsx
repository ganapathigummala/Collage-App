import React from 'react';
import '../css/Administration.css'; // Importing the CSS from the css folder

const teamMembers = [
  {
      name: 'Mr. XYZ',
      role: 'Director',
      bio: 'Mr. XYZ has over 20 years of experience in the IT industry and has been instrumental in building JSPiders into a leading training institute.'
  },
  {
      name: 'Ms. ABC',
      role: 'Head Trainer - Java',
      bio: 'Ms. ABC is an expert in Java development with over 10 years of experience in both corporate training and software development.'
  },
  {
      name: 'Mr. DEF',
      role: 'Training Coordinator',
      bio: 'Mr. DEF manages the training schedules and coordinates with both students and trainers to ensure smooth operations at the Rajajinagar center.'
  },
  {
      name: 'Ms. GHI',
      role: 'Placement Officer',
      bio: 'Ms. GHI works closely with companies to provide 100% placement assistance to students, ensuring their successful transition to the IT industry.'
  },
];

const Administration = () => {
  return (
      <div className="admin-container">
          <h1>Meet the Administration</h1>
          <p>At JSPiders Rajajinagar, we are backed by a team of experienced professionals dedicated to delivering the best training and career opportunities for our students.</p>

          <div className="team-members">
              {teamMembers.map((member, index) => (
                  <div className="team-member" key={index}>
                      <h2>{member.name}</h2>
                      <h3>{member.role}</h3>
                      <p>{member.bio}</p>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Administration;
