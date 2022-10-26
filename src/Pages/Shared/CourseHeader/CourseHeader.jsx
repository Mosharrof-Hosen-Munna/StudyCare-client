import React from 'react'
import headerImg from '../../../images/courseheader.jpg'

const CourseHeader = () => {
  return (
    <header className='py-16 ' style={{backgroundImage: `url(${headerImg})`} }>
        <div className="container mx-auto text-center">
            <h1 className='text-6xl font-bold text-white'>Our Courses</h1>
        </div>
    </header>
  )
}

export default CourseHeader