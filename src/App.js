import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { apiUrl, filterData } from './data';
import Spinner from './Components/Spinner';
import { toast } from "react-toastify";



export default function App() {
  const [course, setCourses] = useState('');
  const [load, setLoad] = useState(false);
  const [category, setCategory] = useState(filterData[0].title);


  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        setCourses(output.data);
        console.log(course);
      }
      catch {
        toast.error("something went wrong");
      }
      setLoad(false);
    }
    fetchData();
  }, [])

  return (
    <div className='min-h-screen flex flex-col bg-gray-600'>
      <div>
        <Navbar />
      </div>
      <div>

        <div className='bg-gray-600'>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center min-h-[50vh]'>
          {
            load ? <Spinner /> : <Cards course={course} category={category} setLoad={setLoad} load={load} />
          }
        </div>
      </div>
    </div>
  );
}
