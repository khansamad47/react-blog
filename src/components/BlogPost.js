import React from 'react'

export default function BlogPost({ title, body, author }) {
  return (
    <>
    <h2>{title}</h2>
    <p>{body}</p>
    <p>{author}</p>
    <button>Delete</button>
    </>
  )
}
