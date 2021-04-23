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
        {label: "Going to lealrn React", important: false, like: false, id: this.id++},
        {label: "That so is good", important: false, like: false, id: this.id++},
        {label: "I need a break", important: false, like: false, id: this.id++}
      ],
      term: '',
      filter: 'all'
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
    this.updateSearchPost = this.updateSearchPost.bind(this);
    this.filterSelect = this.filterSelect.bind(this);

    this.newData = [];   
  }

  deleteItem(id) {
    this.setState(() => {
    const index = this.state.data.findIndex(item => item.id === id);
      this.newData = [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1)];
      this.addLocal();
      return {
        data: this.newData
      };
    });
  }

  addItem(value) {
    const newItem = {
      label: value,
      important: false,
      like: false,
      id: this.id++
    };
    this.setState(() => {
      this.newData = [...this.state.data, newItem];
      this.addLocal();
      return {
        data: this.newData
      };
    });
    
  }

  onImportant(id) {
    this.setState(() => {
      const index = this.state.data.findIndex(item => item.id === id);
      const newItem = {...this.state.data[index], important: !this.state.data[index].important};
      this.newData = [...this.state.data.slice(0, index), newItem, ...this.state.data.slice(index + 1)];
      this.addLocal();
      return {
        data: this.newData
      };
    })
  }

  onLike(id) {
    this.setState(() => {
      const index = this.state.data.findIndex(item => item.id === id);
      const newItem = {...this.state.data[index], like: !this.state.data[index].like};
      this.newData = [...this.state.data.slice(0, index), newItem, ...this.state.data.slice(index + 1)];
      this.addLocal();
      return {
        data: this.newData
      };
    })
  }

  searchPost(data, term) {
    if (term.length === 0) {
      return data;
    } else {
      return data.filter(item => item.label.toLowerCase().indexOf(term) > -1);
    }
  }

  updateSearchPost(term) {
    this.setState(() => {
      return {
        term: term
      }
    })
  }

  filterPost(data, filter) {
    if (filter === 'like') {
      return data.filter(item => item.like)
    } else {
      return data
    }
  }

  filterSelect(filter) {
    this.setState(() => {
      return {
        filter: filter
      }
    })
  }

  addLocal() {
    localStorage.setItem('data', JSON.stringify(this.newData)); 
  }

  render() {
    const likePost = this.state.data.filter(item => item.like).length;
    const allPosts = this.state.data.length;
    const visiblePost = this.filterPost(this.searchPost(this.state.data, this.state.term), this.state.filter);

    return (
      <Div>
        <AppHeader likePostApp={likePost} allPostsApp={allPosts}/>
        <div className="search-panel d-flex">
          <SearchPanel updateApp={this.updateSearchPost}/>
          <PostStatusFilter filterApp={this.state.filter} filterSelectApp={this.filterSelect}/>
        </div>
        <PostList postsApp={visiblePost} deleteApp={this.deleteItem}
        importantApp={this.onImportant} likeApp={this.onLike}/>
        <PostAddForm addApp={this.addItem}/>
      </Div>
    )
  }
  
}

export default App;
