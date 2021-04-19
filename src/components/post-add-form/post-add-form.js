import React from 'react';
import './post-add-form.css';

const PostAddForm = (props) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label"
        id="value"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => props.addApp(document.getElementById('value').value)}
        >
        Добавить</button>
    </div>
  )
}

export default PostAddForm;