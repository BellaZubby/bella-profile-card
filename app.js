function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString()
    document.getElementById("time-container").innerText = utcTime;
}

updateTime();
