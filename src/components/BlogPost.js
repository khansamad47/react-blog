import React from 'react'
import { deleteBlog } from '../services/database'

export default function BlogPost({ item, onDelete }) {
  return (
    <>
    <h2>{item.title}</h2>
    <p>{item.body}</p>
    <p>{item.author_name}</p>
    <button onClick={ () => onDelete(item) }>Delete</button>
    </>
  )
}
