import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="container">
      <h1>Ad Limen Theme Demo</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;