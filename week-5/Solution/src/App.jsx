
// import React from "react";

// function App() {
//   const vars = {
//     name: 'John Doe',
//     description: 'Software Developer',
//     socialMedia: {
//       linkedin: 'https://www.linkedin.com/in/johndoe',
//       twitter: 'https://twitter.com/johndoe',
//     },
//     interests: ['React', 'JavaScript', 'Web Development'],
//   };

//   return (
//     <div className="app">
//       <Card {...vars} />
//     </div>
//   );
// }

// export default App;



import React, { useState, useMemo } from 'react';



const MemoExample = () => {
  const [inputValue, setInputValue] = useState(5);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <ExpensiveCalculation value={inputValue} />
    </div>
  );
};

const ExpensiveCalculation = function({ value }) {
  const expensiveResult = useMemo(() => {
    // Simulating a computationally expensive operation
    console.log('Calculating expensive result...');
    return value * 2;
  }, [value]); // Dependency array: recalculates when 'value' changes

  return (
    <div>
      <p>Value: {value}</p>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  );
};

export default MemoExample;
