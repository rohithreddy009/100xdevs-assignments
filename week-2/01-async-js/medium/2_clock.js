function getCurrentTime() {
    const now = new Date();
  
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const formattedTime24 = `${hours}:${minutes}:${seconds}`;
    
    const formattedHours12 = (hours > 12) ? (hours - 12).toString().padStart(2, '0') : hours;
    const ampm = (hours >= 12) ? 'PM' : 'AM';
    const formattedTime12 = `${formattedHours12}:${minutes}:${seconds} ${ampm}`;
  
    return { formattedTime24, formattedTime12 };
  }
  
  function updateClock() {
    const { formattedTime24, formattedTime12 } = getCurrentTime();
  
    console.log(`24-Hour Format: ${formattedTime24}`);
    console.log(`12-Hour Format: ${formattedTime12}`);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  