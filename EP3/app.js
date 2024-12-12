import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Namaste React from Create Element'
// );

// //JSX (transpiled before it reaches the JS) -Parcel -Babel
// const heading = (
//   <h1 className="head" tabIndex="1">
//     Namaste reactby JSX
//   </h1>
// );

// //React component
// // class based component -> old
// // function based component -> new

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// const HeadingComponent = () => (
//   <div id="container">
//     <h1>Namaste from raect component</h1>
//   </div>
// );

// root.render(<HeadingComponent />);

const Title = () => (
  <div id="title">
    <h1>Title</h1>
  </div>
);

const num = 1000;
const span = <span>React Element</span>;

//component composition
const Head = () => (
  //Call component in other components
  <div id="container">
    <h2>{(console.log(num), num)}</h2>
    {Title()}
    <Title />
    <Title></Title>
    <h1>From {span} container</h1>
  </div>
);

root.render(<Head />);
