import React from 'react';
import PostListItem from '../post-list-item/post-list-item.js';
import './post-list.css';

const PostList = (props) => {
  const elements = props.posts.map(propsItem => (
    <li key={propsItem.id} className="list-group-item">
      <PostListItem label={propsItem.label} important={propsItem.important} onDelete={() => console.log('Deleted')}/>
    </li>
    )
  );

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList;