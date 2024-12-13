function showPopup(date) {
  const targetDate = new Date(date);
  const currentDate = new Date();
  const diff = targetDate - currentDate;

  if (diff <= 0) {
    document.getElementById("popup-content").textContent =
      "The exam date has already passed!";
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById(
      "popup-content"
    ).textContent = `${days} days, ${hours} hours, and ${minutes} minutes.`;
  }

  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function showDuration(timeSlot) {
  const startTime = new Date(timeSlot);

  const endTime = new Date(startTime);
  endTime.setHours(12, 0, 0, 0);

  const durationMs = endTime - startTime;

  if (durationMs <= 0) {
    document.getElementById("popup-content").textContent =
      "Invalid time range!";
  } else {
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById(
      "popup-content"
    ).textContent = `Duration: ${hours} hours ${minutes} minutes`;
  }

  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
