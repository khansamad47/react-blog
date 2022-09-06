import {React, useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { addBlog } from '../services/database'

const COMPONENT_STATUS = {
  DEFAULT : "DEFAULT",
  WRITE_FAILED : "WRITE_FAILED",
  WRITE_SUCCESS : "WRITE_SUCCESS",
}

const statusMessage = (value) => {
  switch(value) {
    case COMPONENT_STATUS.WRITE_FAILED:
      return "Failed to write to db.";
    case COMPONENT_STATUS.WRITE_SUCCESS:
      return "Success.";
    default:
      return "";

  }
};

export default function CreatePost() {
  const [ body, setBody ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ status, setStatus ] = useState(COMPONENT_STATUS.DEFAULT);
  const { user } = useContext(UserContext);

  const handleSaveButton = () => {
    console.log("Posting blog post for user =", user);
    addBlog({ title: title, body: body, author_uid: user.uid, author_name: user.displayName })
    .then(()=>{ 
      setStatus(COMPONENT_STATUS.WRITE_SUCCESS);
      console.log("Write was successful.");
    })
    .catch((error)=>{
      setStatus(COMPONENT_STATUS.WRITE_FAILED);
       console.log("Write failed.", error);
    });
  };

  return (
    <>
        <h1>CreatePost</h1>
        {
          status !== COMPONENT_STATUS.DEFAULT && (<div> { statusMessage(status) } </div>)
        }
        <label>Title</label>
        <input type="text" value={ title } onChange={(event) => { setTitle (event.target.value )} } />
        <label>Post</label>
        <input type="text" value={ body } onChange={(event) => { setBody (event.target.value )} } />
        <button onClick={ handleSaveButton }>Submit</button>
    </>
  )
}
