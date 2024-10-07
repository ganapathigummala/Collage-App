import React from 'react'
import { Outlet, Link } from 'react-router-dom'




const Body = () => {
  return (
    <div className='app'>
        
            <nav>
              <div className='logo'></div>
              <Link to='home' className='link'>HOME</Link>
              <Link to='about' className='link'>ABOUT US</Link>
              <Link to='administration' className='link'>ADMINISTRATION</Link>
              <Link to='facilities' className='link'>FACILITIES</Link>
              <Link to='student' className='link'>STUDENT CORNER</Link>
              <Link to='certification' className='link'>CERTIFICARTIFICATIONS</Link>
              <Link to='contacts' className='link'>CONTACTS</Link>
            </nav>
        
        <div className='outlet'>
       <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Body