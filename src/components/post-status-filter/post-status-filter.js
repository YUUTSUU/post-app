import React from 'react';

// import {Button} from 'reactstrap';
import './post-status-filter.css';

class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: 'like', label: 'Понравились'}
    ]
  }
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filterApp === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button key={name} className={`btn ${clazz}`} type="button" onClick={() => this.props.filterSelectApp(name)}>{label}</button>
      )
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

export default PostStatusFilter;