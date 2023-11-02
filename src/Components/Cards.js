import React, { useState } from 'react'
import Card from './Card';
import Spinner from './Spinner';

export default function Cards(props) {
  let courses=props.course;
  let category=props.category;
  let load=props.load;
  let setLoad=props.setLoad;

  const [likedCourse,setLikedCourses]=useState([]);

  // get courses
  let allCourses=[];      
  function getCourses(){
    setLoad(true);
    if(category==='All'){
      Object.values(courses).forEach((array)=>{
        array.forEach(courseData=>{
          allCourses.push(courseData);
        })
      })
      setLoad(false);
      return allCourses;
    }else{
      setLoad(false);
      return courses[category];
    }
  }
  // console.log(getCourses());
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 '>
      {
        getCourses().map( (course) => (
          
            load ? <Spinner/>:<Card key={course.id} course={course} likedCourse={likedCourse} setLikedCourses={setLikedCourses}/>
          
        ))
      }
    </div>
  )
}
