import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Card(props) {
  let course = props.course;
  let likedCourse = props.likedCourse;
  let setLikedCourses = props.setLikedCourses;
  const clickHandler = () => {
    // logic
    if (likedCourse.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => (cid != course.id)));
      toast.warning("Liked removed!");
      return;
    } else {
      // phele se like nhi hai
      if (likedCourse.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
    }
    toast.success("Liked Successfully")
  }
  return (
    <div className='w-[300px] bg-gray-700 overflow-hidden relative '>
      <div className='relative'>
        <img src={course.image.url}></img>
        <div className='w-[42px] h-[42px] bg-white rounded-full absolute right-2 bottom-[-15px] flex items-center justify-center'>
          <button onClick={clickHandler}>

            {
              likedCourse.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)
          }
        </p>
      </div>
    </div>
  )
}
