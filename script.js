function updateTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const currentDayElement = document.getElementById("currentDay");

    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000; // Timezone offset in milliseconds
    const lagosTime = new Date(now.getTime() + offset + (3600000)); // UTC+1
    const timeString = lagosTime.toTimeString().split(" ")[0]; // Extract time part
    const dayOfWeek = lagosTime.toLocaleString('en-us', { weekday: 'long' });

    currentTimeElement.textContent = timeString;
    currentDayElement.textContent = dayOfWeek;
}

document.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 60000); // Update every minute
});
