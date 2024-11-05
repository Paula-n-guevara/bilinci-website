// Smooth Scroll Function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const speed = 200; // Speed of counting animation

            if (count < target) {
                counter.innerText = count + 1;
                setTimeout(updateCount, speed / target);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
