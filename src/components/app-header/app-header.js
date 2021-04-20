import React from 'react';

import styled from 'styled-components';
// import './app-header.css';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    :hover {
      color: white;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = (props) => {
  return (
    <Header>
      <h1>Yerzhan Taikeshev</h1>
      <h2>{props.allPostsApp} записей, из них понравилось {props.likePostApp}</h2>
    </Header>
  )
}

export default AppHeader;