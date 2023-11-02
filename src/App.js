import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { apiUrl,filterData } from './data';
import Spinner from './Components/Spinner';
import {toast} from "react-toastify";



export default function App() {
  const [course,setCourses]=useState('');
  const [load,setLoad]=useState(false);
  const [category,setCategory]=useState(filterData[0].title);
  // async function fetchData(){
  //   setLoad(true);
  //   try{
  //     let response=await fetch(apiUrl);
  //     let output=await response.json();

  //     // output
  //     setCourses(output.data);
  //     console.log(course);
  //   }
  //   catch(error){
  //     toast.error("There Some Issue");
  //   }
  //   setLoad(false);
  // }

  useEffect(()=>{
    setLoad(true);
    const fetchData=async()=>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();

        setCourses(output.data);
      }
      catch{
        toast.error("something went wrong");
      }
      setLoad(false);
    }
    fetchData();
  },[])

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div>
        {
          load ? <Spinner/>:<Cards course={course} category={category}/>
        }
        {/* <Cards/> */}
      </div>
    </div>
  );
}
