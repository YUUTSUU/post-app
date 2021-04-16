import React from 'react';
import './post-list-item.css';

class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: this.props.important,
      like: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(() => ({important: !this.state.important}));
  }

  onLike() {
    this.setState(() => ({like: !this.state.like}));
  }

  render() {
    let classNames = "app-list-item d-flex justify-content-between";
    
    if (this.state.important) {
      classNames += " important";
    }
    if (this.state.like) {
      classNames += " like";
    }

    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>{this.props.label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )
  }
}

export default PostListItem;