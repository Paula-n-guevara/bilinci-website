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
        const target = +counter.getAttribute("data-target");
        const increment = Math.ceil(target / 200); // Adjust speed by changing the divisor

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});
