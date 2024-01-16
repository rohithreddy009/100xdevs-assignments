import { useState } from 'react'
import { Card } from './components/Card'
// import './App.css'

// function App() {
//   return (
//     <div>
//       <div>Hi from App.jsx</div>
//       <Card />
//     </div>
//   )
// }

// export default App


function App() {
  const vars = {
    name: 'John Doe',
    description: 'Software Developer',
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
    interests: ['React', 'JavaScript', 'Web Development'],
  };

  return (
    <div className="app">
      <Card {...vars} />
    </div>
  );
}

export default App;

