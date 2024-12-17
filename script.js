document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    const animateProgressBars = () => {
        progressBars.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width");
            bar.style.width = targetWidth; // Trigger animation
        });
    };

    // Run animation when page loads
    animateProgressBars();
});


