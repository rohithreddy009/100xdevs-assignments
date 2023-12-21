## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

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

    // Function to update the counter and schedule the next update
    function updateCounter() {
      count++;
      document.getElementById('counter').innerText = count;

      // Schedule the next update after 1000 milliseconds (1 second)
      setTimeout(updateCounter, 1000);
    }

    // Start the counter by calling the updateCounter function
    updateCounter();
    /*
    setTimeout(() => {
      clearTimeout(timeoutId);
    }, 10000);
    */
  </script>

</body>
</html>







































































(Hint: setTimeout)