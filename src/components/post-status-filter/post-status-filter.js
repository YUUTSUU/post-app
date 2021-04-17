import React from 'react';

import {Button} from 'reactstrap';
// import './post-status-filter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button color="info" type="button">Все</Button>
      <Button outline color="secondary" type="button">Понравились</Button>
    </div>
  )
}

export default PostStatusFilter;