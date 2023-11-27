function animateValue(id, start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const currentCount = Math.floor(progress * (end - start) + start);
        document.getElementById(id).textContent = currentCount;

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}














