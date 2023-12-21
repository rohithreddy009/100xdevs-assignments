const fs = require('fs');

// Function to read the contents of a file and print it to the console
function readFileAndPrint(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Print the contents of the file
    console.log('File Content:', data);

    // Simulate an expensive operation
    performExpensiveOperation();
  });
}

// Simulated expensive operation (for demonstration purposes)
function performExpensiveOperation() {
  const startTime = Date.now();

  // Simulate an expensive loop
  for (let i = 0; i < 1000000000; i++) {
    // Do something that takes time
  }

  const endTime = Date.now();
  const duration = endTime - startTime;

  console.log('Expensive Operation Duration:', duration, 'ms');
}

// Specify the filename you want to read
const filename = 'v.txt';

// Read the file and print its contents
readFileAndPrint(filename);
