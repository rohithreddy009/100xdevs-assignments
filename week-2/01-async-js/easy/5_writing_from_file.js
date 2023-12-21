const fs = require('fs');

// Data to be written to the file
const contentToWrite = 'This is the new content that will be written to the file.';

// Specify the file name
const filename = 'v.txt';

// Function to write to the file and perform an expensive operation
function writeFileAndPerformExpensiveOperation(filename, content) {
  fs.writeFile(filename, content, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }

    console.log('Write operation completed successfully.');

    // Perform an expensive operation after writing to the file
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

// Write to the file and perform an expensive operation
performExpensiveOperation()
writeFileAndPerformExpensiveOperation(filename, contentToWrite);
