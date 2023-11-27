function startCountingAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).find('h3').each(function() {
                var targetValue = parseInt($(this).attr('data-target'));
                $(this).animateNumber({ number: targetValue }, 5000);
            });
            observer.unobserve(entry.target);
        }
    });
}

const countingAnimationOptions = {
    threshold: 0.2
};

const countingAnimationObserver = new IntersectionObserver(startCountingAnimation, countingAnimationOptions);

const counters = document.querySelectorAll('.counters .counter');

counters.forEach(counter => {
    countingAnimationObserver.observe(counter);
});
