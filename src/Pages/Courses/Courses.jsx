import React from 'react'
import CourseCard from '../Shared/CourseCard/CourseCard'

const Courses = () => {
  return (
    <div className='bg-slate-100'>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
      
    </div>
  )
}

export default Courses