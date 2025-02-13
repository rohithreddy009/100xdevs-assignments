/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(`Promise resolved after ${n} seconds`);
//       }, n * 1000);
//     });
//   }
  
//   module.exports = wait;
  

function wait(n) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(`Promise resolved after ${n} seconds`);
      }, n * 1000);
    });
  }
  
//   module.exports = wait;


app.listen(3000)
  
  