document.addEventListener("DOMContentLoaded", () => {
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
});
