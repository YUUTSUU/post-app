import React from 'react';
import './post-add-form.css';

class PostAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.valueChange = this.valueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  valueChange(event) {
    this.setState(() => {
      return {
        value: event.target.value
      }
    })
  }

  formSubmit(event) {
    event.preventDefault();
    this.props.addApp(this.state.value)
    this.setState(() => {
      return {
        value: ''
      }
    })
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.formSubmit}>
        <input
          type="text"
          placeholder="О чем вы думаете сейчас?"
          className="form-control new-post-label"
          id="value"
          onChange={this.valueChange}
          value={this.state.value}
        />
        <button type="submit" className="btn btn-outline-secondary">Добавить</button>
      </form>
    )
  }
}

export default PostAddForm;