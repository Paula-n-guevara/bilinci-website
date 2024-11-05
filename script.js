document.addEventListener("DOMContentLoaded", () => {
    // Tooltip translation effect
    const translatableElements = document.querySelectorAll(".translatable");
    translatableElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            const translation = element.getAttribute("data-translation");
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.innerText = translation;
            element.appendChild(tooltip);
        });

        element.addEventListener("mouseleave", () => {
            const tooltip = element.querySelector(".tooltip");
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Counter animation effect
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});
