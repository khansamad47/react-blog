import {React, useState, useEffect } from 'react'
import BlogPost from '../components/BlogPost';
import { deleteBlog, getAllBlogs } from '../services/database';


export default function Home() {
  const [ blogs, setBlogs ]  = useState([]);

  const fetchDataFromBackend = () => {
      getAllBlogs().then((items) => { setBlogs(items); })
      .catch((error) => console.log(error))
  };

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  const onDelete = (item) => { 
    deleteBlog(item)
    .then( () => fetchDataFromBackend())
    .catch(()=>console.log("Unable to delete")); 

  };
  return (
    <>
    <div>Home</div>
    {
        blogs.map((item) => { return (<BlogPost key={item.id} item={item} onDelete={ onDelete } />); })
    }
    </>
  )
}
