function updateTimer() {
    const now = new Date();
    
    // Get the individual components of the date
    const month = now.getMonth() + 1; // Months are zero-indexed (0-11)
    const day = now.getDate(); // Gets the day of the month (1-31)
    const year = now.getFullYear(); // Gets the four-digit year

    // Format the date as MM/DD/YYYY
    const formattedDate = `${month}/${day}/${year}`;

    // Get the time components
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time as HH:MM:SS AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

    // Combine date and time
    const displayTime = `${formattedDate} ${formattedTime}`;

    // Update the timer element with the formatted time
    document.getElementById("timer").innerText = displayTime;
}