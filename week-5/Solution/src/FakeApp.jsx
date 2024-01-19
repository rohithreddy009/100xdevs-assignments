// 1

// function App() {

//     const [count, setCount] = useState(0)
  
//     const increment = () => {
//       setCount(count + 1)
//     }
  
//     const decrement = () => {
//       setCount(count - 1)
//     }
  
      
  
//     return (
//       <div>
//         <h1>Counter App</h1>
//         <h1>count {count} </h1>
//         <button onClick={increment}> Increase  </button>
//         <button onClick={decrement}> Increase  </button>
//       </div>
//     )
//   }
  
//   export default App


// 2

// import { useState } from "react";

// function App(){
//   const [firstTitle, setFirstTitle] = useState("my name is ironman")

//   function changeTitle(){
//     setFirstTitle(`my name is: ${Math.random()}`)
//   }
  
//   return <div>
//     <button onClick={changeTitle}>click me to change the title</button>
//     <Header title={firstTitle} />
//     <br />
//     <Header title="my name is varshi" />
//     <Header title="my name is varshi" />

//   </div>
// } 

// const Header = React.memo(function({title}){
//   return <div>
//     {title}
//   </div>
// })

// export default App