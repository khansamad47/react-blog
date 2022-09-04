import {React, useState, useEffect } from 'react'
import BlogPost from '../components/BlogPost';
import { getAllBlogs } from '../firebase';

export default function Home() {
  const [ blogs, setBlogs ]  = useState([]);
  useEffect(() => {
    getAllBlogs().then((items) => {
        console.log("useEffectCalled.")
        setBlogs(items);
    })
    .catch((error) => console.log(error))
  }, []);

  return (
    <>
    <div>Home</div>
    {
        blogs.map(({ title, author, body, id }) => {
            return (
                <BlogPost key={id} title={title} body={body} author={author} />
            );
        })
    }
    </>
  )
}
