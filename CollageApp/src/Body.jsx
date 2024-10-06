import React from 'react'
import { Outlet, Link } from 'react-router-dom'




const Body = () => {
  return (
    <div className='app'>
        <header>
            <nav>
              
              <Link to='home'>HOME</Link>
              <Link to='about'>ABOUT US</Link>
              <Link to='administration'>ADMINISTRATION</Link>
              <Link to='facilities'>FACILITIES</Link>
              <Link to='student'>STUDENT CORNER</Link>
              <Link to='certification'>CERTIFICARTIFICATIONS</Link>
              <Link to='contacts'>CONTACTS</Link>
            </nav>
        </header>
        <div className='outlet'>
       <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Body