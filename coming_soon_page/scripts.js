    // Set the target date for the countdown (14th Feb 2025)
    const targetDate = new Date('February 14, 2025 00:00:00').getTime();

    // Function to update the countdown every second
    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.querySelector('.countdown div:nth-child(1) span').textContent = days;
        document.querySelector('.countdown div:nth-child(2) span').textContent = hours;
        document.querySelector('.countdown div:nth-child(3) span').textContent = minutes;
        document.querySelector('.countdown div:nth-child(4) span').textContent = seconds;

        // If the countdown is finished, display a message
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown').innerHTML = "<div>Countdown ended!</div>";
        }
    }

    // Update the countdown every 1 second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to display the countdown immediately on page load
    updateCountdown();