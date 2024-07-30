document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".container");
    const applyButton = document.querySelector("button");
    const input = document.querySelector("input");

    function createGrid(size) {
        container.innerHTML = ""; // Clear existing grid

        // Create boxes
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement("div");
            div.classList.add("box");
            container.appendChild(div);
        }

        // Apply styles
        const boxes = document.querySelectorAll(".box");
        const boxSize = 100 / size; // Percentage size for each box
        boxes.forEach(box => {
            box.style.width = `${boxSize}%`;
            box.style.height = `${boxSize}%`;
        });

        // Add event listeners
        boxes.forEach(box => {
            box.addEventListener("mouseenter", () => {
                box.classList.add("box-hover");
            });
            box.addEventListener("mouseleave", () => {
                box.classList.remove("box-hover");
            });
        });
    }

    // Initial grid setup
    createGrid(16);

    // Update grid on button click
    applyButton.addEventListener("click", () => {
        const number = parseInt(input.value, 10);
        if (number > 0) {
            createGrid(number);
        }
    });
});

