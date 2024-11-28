const head = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello World from React'
);

// console.log(head); //object
// root.render(head);
//const root = ReactDOM.createRoot(document.getElementById('root'));

// const parent = React.createElement('div', { id: 'parent' }, 'div');
// const child = React.createElement('div', { id: child }, 'h1');

// const heading1 = React.createElement('h1', {id: h1}, 'Hello from child 1')
// const heading2 = React.createElement('h1', {id: h1}, 'Hello from child 2')

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am Heading 1'),
    React.createElement('h2', {}, 'I am Heading 2'),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
