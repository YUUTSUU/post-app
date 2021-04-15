import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app.js';
// import reportWebVitals from './reportWebVitals';


// class WhoAmI extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {years: 0};
//     this.nextYear = this.nextYear.bind(this);
//     // this.nextYear = () => {this.setState(() => ({years: this.state.years + 1}))};
//   }

//   nextYear() {
//     this.setState(() => ({years: this.state.years + 1}));
//   }

//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;

//     return (
//       <React.Fragment>
//         <button onClick={this.nextYear}>+</button>
//         <h1>My name is {name}, surname - {surname}, years: {years}</h1>
//         <a href={link}>My profile</a>
//       </React.Fragment>
//     )
//   }
// }

// const App = () => {
//   return (
//     <React.Fragment>
//       <WhoAmI name="John" surname="Smith" link="https://facebook.com"/>
//       <WhoAmI name="Alex" surname="Smith" link="https://facebook.com"/>
//       <WhoAmI name="Pitter" surname="Smith" link="https://facebook.com"/>
//     </React.Fragment>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


// reportWebVitals();
