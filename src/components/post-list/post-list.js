import React from 'react';
import PostListItem from '../post-list-item/post-list-item.js';
import './post-list.css';

const PostList = (props) => {
  const elements = props.postsApp.map(propsItem => (
    <li key={propsItem.id} className="list-group-item">
      <PostListItem label={propsItem.label} important={propsItem.important}
      like={propsItem.like} delete={() => props.deleteApp(propsItem.id)}
      onImportant={() => props.importantApp(propsItem.id)} onLike={() => props.likeApp(propsItem.id)}/>
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