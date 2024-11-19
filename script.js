document.addEventListener("DOMContentLoaded", () => {
    // Counter animation
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = Math.ceil(target / 100);

            if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

    // Tooltip interaction
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
            if (tooltip) tooltip.remove();
        });
    });
});
