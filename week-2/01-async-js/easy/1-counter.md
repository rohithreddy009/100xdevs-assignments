## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time-based Counter</title>
</head>
<body>

  <h1>Counter: <span id="counter">0</span></h1>

  <script>
    // Initialize counter
    let count = 0;

    // Function to update the counter and display it
    function updateCounter() {
      count++;
      document.getElementById('counter').innerText = count;
    }

    // Set interval to update the counter every second (1000 milliseconds)
    const intervalId = setInterval(updateCounter, 1000);
    /*
    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);
    */
  </script>

</body>
</html>
