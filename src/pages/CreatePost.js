import {React, useState } from 'react'
import { addBlog, getCurrentUserId } from '../firebase'

export default function CreatePost() {
  const [ body, setBody ] = useState("");
  const [ title, setTitle ] = useState("");

  const handleSaveButton = () => {
    addBlog({title: title, body: body})
    .then(()=>{ console.log("Write was successful.")})
    .catch(()=>{ console.log("Write failed.")})
  };

  return (
    <>
        <h1>CreatePost</h1>
        <label>Title</label>
        <input type="text" value={ title } onChange={(event) => { setTitle (event.target.value )} } />
        <label>Post</label>
        <input type="text" value={ body } onChange={(event) => { setBody (event.target.value )} } />
        <button onClick={ ()=>{ addBlog({title: title, body: body, uid: getCurrentUserId() } )} }>Submit</button>
    </>
  )
}
