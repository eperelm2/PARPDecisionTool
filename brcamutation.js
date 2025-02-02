const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modalContainer = document.getElementById('modalContainer');

const modal = document.getElementById('modal');
const overlay = document.getElementById('tint-overlay');

const section = document.getElementsByClassName("hidden-glossary-terms")[0];
const glossaryButton = document.querySelector(".glossary-text-button");

const dropdownButton = document.getElementById("open-dropdown");
const dropdownContent = document.getElementById("dropdown-content");

glossaryButton.addEventListener('click', () => {
    if (section.style.display === "none" || section.style.display === "") {
                        // section.style.display = "block";
        section.classList.toggle("show");
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        section.style.display = "none";
    }
})

dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event from bubbling up
    dropdownContent.style.display = 
        dropdownContent.style.display === "block" ? "none" : "block";
});


// Open modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = "block"
    overlay.style.display = 'block';
});

// Close modal on "Close" button
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

// Close modal when clicking outside the modal content
document.body.addEventListener('click', (event) => {
    // Check if modal is open
    if (modal.style.display === 'block' && !modal.contains(event.target) && event.target !== openModalBtn) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
});