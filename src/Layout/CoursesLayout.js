import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import CourseHeader from '../Pages/Shared/CourseHeader/CourseHeader'

const CoursesLayout = () => {
    const data = [
        {
            "id": "01",
            "name": "Data Science",
            "slogan":"Data is Everything",
            "icon":"<FaDatabase className='text-5xl'/>"
        },
        {
            "id": "02",
            "name": "Business",
            "slogan":'Improve your business',

            "icon": "<FaBusinessTime className='text-5xl'/>"
        },
        {
            "id": "03",
            "name": "Art & Design",
            "slogan":'Fun & Challenging',

            "icon": "<FaArtstation className='text-5xl'/>"
        },
        {
            "id": "04",
            "name": "Lifestyle",
            "slogan":'New Skills, New You',

            "icon": "<FaSmile className='text-5xl'/>"
        },
        {
            "id": "05",
            "name": "Marketing",
            "slogan":'Improve your business',

            "icon": "<FaBusinessTime className='text-5xl'/>"
        },
        {
            "id": "06",
            "name": 'Finance',
            "slogan":'Fun & Challenging',

            "icon": "<FaBusinessTime className='text-5xl'/>"
        }
        ,
        {
            "id": "07",
            "name": 'Health & Fitness',
            "slogan":'Invest to Your Body',

            "icon": "<FaBusinessTime className='text-5xl'/>"
        }
        ,
        {
            "id": "08",
            "name": 'Music',
            "slogan":'Major or Minor',

            "icon": "<FaBusinessTime className='text-5xl'/>"
        }
        ,
        {
            "id": "09",
            "name": 'Academics',
            "slogan":'High Education Level',

            "icon": "<FaBusinessTime className='text-5xl'/>"
        }
    ]
  return (
    <div className='bg-slate-100'>
        <CourseHeader/>

<div className="container mx-auto py-20 px-4">
<div className='flex'>
   <div className='w-1/3 px-4'>
      <nav>
        <h1 className='text-2xl font-semibold mb-4 text-primary'>Category List</h1>
        <ul className=''>
          {data.map((category)=><li className='my-1 '>
            <NavLink
            to={`/courses/details/${category.id}`}
            className={({ isActive }) =>
              isActive ? 'border-red-400 border-l-8 text-white bg-primary p-4 my-1 inline-block w-full  cursor-pointer shadow-sm    font-semibold text-lg' : 'p-4 my-1 inline-block w-full bg-white cursor-pointer shadow-sm hover:bg-primary hover:border-l-8 border-red-400 hover:text-white duration-300 font-semibold text-lg'
            }
          >
            {category.name}
          </NavLink></li>)}
          
        </ul>
      </nav>
      <div>
      <h1 className='text-2xl font-semibold mb-4 mt-12 text-primary'>Opening Hours</h1>
      <div className='flex justify-between items-center'>
        <div>
        Mon - Tues :
        </div>
        <div>
        6.00 am - 10.00 pm
        </div>
      </div>
      <hr className='my-2'/>
      <div className='flex justify-between items-center'>
        <div>
        Wednes - Thurs :
        </div>
        <div>
        8.00 am - 6.00 pm

        </div>
      </div>
      <hr className='my-2'/>
      <div className='flex justify-between items-center'>
        <div>
        Fri :
        </div>
        <div>
        3.00 pm - 8.00 pm
        </div>
      </div>
      <hr className='my-2'/>
      <div className='flex justify-between items-center'>
        <div>
        Sun :
        </div>
        <div>
        Colosed
        </div>
      </div>
      <hr className='my-2'/>
      </div>
   </div>
   <div className='w-full ml-8'><Outlet/></div>
</div>
</div>
    </div>
  )
}

export default CoursesLayout