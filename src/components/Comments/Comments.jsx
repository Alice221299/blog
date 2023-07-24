import React from 'react'
import Comment from '../Comment/Comment'
import FormComment from '../FormComment/FormComment'

const Comments = ({data}) => {
  return (
    <div>
        <h2 className="tm-color-primary tm-post-title">Comments</h2>
        <hr className="tm-hr-primary tm-mb-45"/>
        {data.map((comment, index) => (
          <Comment comment={comment} key={index}/>
        ))}
        <FormComment/>
    </div>
  )
}

export default Comments