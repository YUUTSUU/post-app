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


const App = () => {
  const data = [
    {label: "Going to lealrn React", important: false, id: 'a'},
    {label: "That so is good", important: false, id: 'b'},
    {label: "I need a break", important: false, id: 'c'}
  ];

  return (
    <Div>
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </Div>
  )
}

export default App;
