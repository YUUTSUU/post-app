import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState(() => {
      return {
        term: event.target.value
      }
    })
    this.props.updateApp(event.target.value)
  }

  render() {
    return (
      <input
        className="from-control search-input"
        type="text"
        placeholder="Поиск по записям"
        // value={this.state.term}
        onChange={this.updateSearch}
      />
    )
  }
}

export default SearchPanel;