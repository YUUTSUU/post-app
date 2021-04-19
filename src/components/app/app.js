import React from 'react';
import AppHeader from '../app-header/app-header.js';
import SearchPanel from '../search-panel/search-panel.js';
import PostStatusFilter from '../post-status-filter/post-status-filter.js';
import PostList from '../post-list/post-list.js';
import PostAddForm from '../post-add-form/post-add-form.js';

// import Style from './App.module.css';
// import './app.css';
// import './app.sass'; //так же можно использовать scss
import styled from 'styled-components';

const Div = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.id = 0;
    this.state = {
      data: [
        {label: "Going to lealrn React", important: false, id: this.id++},
        {label: "That so is good", important: false, id: this.id++},
        {label: "I need a break", important: false, id: this.id++}
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.newData = [];
    // this.counter();
  }

  // counter() {
  //   this.state.data.forEach((item, i) => {
  //     console.log(i);
  //   })
  //   for (let i; i < this.state.data; i++) {
  //     console.log(i);
  //   }
  //   this.state.data.find(item => {
  //     return console.log(item);
  //   })
  //   this.state.data.map((item, i) => {
  //     return this.id = i
  //   })
  //   // console.log(this.state.data.lenght);
  // }

  deleteItem(id) {
    this.setState(() => {
    const index = this.state.data.findIndex(item => item.id === id);
    // const newData = [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1)];
      this.newData = [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1)]
      console.log(this.newData);
      return {
        // data: newData
        data: this.newData
      }
    });
  }

  addItem(value) {
    const newItem = {
      label: value,
      important: false,
      id: this.id++
    }
    this.setState(() => {
      // const newData = [...this.state.data, newItem];
      this.newData = [...this.state.data, newItem]
      console.log(this.newData);
      return {
        // data: newData
        data: this.newData
      }

    })
  }

  render() {
    return (
      <Div>
        <AppHeader/>
        <div className="search-panel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList postsApp={this.state.data} deleteApp={this.deleteItem}/>
        <PostAddForm addApp={this.addItem}/>
      </Div>
    )
  }
  
}

export default App;
