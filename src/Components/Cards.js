import React from 'react'
import Card from './Card';

export default function Cards(props) {
  let courses=props.course;
  let category=props.category;
  console.log(courses);

  // get courses
  let allCourses=[];      
  function getCourses(){
    if(category==='All'){
      Object.values(courses).forEach((array)=>{
        array.forEach(courseData=>{
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }else{
      return courses[category];
    }
  }
  // console.log(getCourses());
  return (
    <div>
      {
        getCourses().map( (course) => (
          <Card key={course.id} course={course}/>
        ))
      }
    </div>
  )
}
