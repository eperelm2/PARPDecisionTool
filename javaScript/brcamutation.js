const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modalContainer = document.getElementById('modalContainer');
const modal = document.getElementById('modal');
const overlay = document.getElementById('tint-overlay');

const section = document.getElementsByClassName("hidden-glossary-terms")[0];
const glossaryButton = document.querySelector(".glossary-text-button");
const glossaryDropdownBool = document.getElementById("glossary-terms-dropdown-bool")

const dropdownButton = document.getElementById("open-dropdown");
const dropdownContent = document.getElementById("dropdown-content");
const dropdownIcon = document.getElementById("dropdown-open-bool");
const dropdownViewType = document.getElementById("dropdown-view-type")

const gridView =  document.getElementById("grid-view")
const listView =  document.getElementById("list-view")

const tableDisplay = document.getElementById("patient-question-table");
const listDisplay = document.getElementById("patient-question-list");
let grid_listTextDisplay = document.querySelector(".grid-view-text");

const tableViewButton = document.getElementById("open-dropdown")


/** Event Listener to open glossary hidden section */
glossaryButton.addEventListener('click', () => {
    if (section.style.display === "none" || section.style.display === "") {
        section.classList.toggle("show");
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        glossaryDropdownBool.innerText = glossaryDropdownBool.innerText === "expand_more" ? "expand_less" : "expand_more";
    } else {
        section.style.display = "none";
    }
})

/** Event listener to create grid view of patient table */
gridView.addEventListener("click", () => {
    tableDisplay.style.display = "block";
    listDisplay.style.display = "none";
    grid_listTextDisplay.innerText = "Grid View"
    dropdownContent.style.display = "none"
    dropdownViewType.innerText = "grid_view"
    dropdownIcon.innerText = dropdownIcon.innerText === "expand_more" ? "expand_less" : "expand_more";

})

/** Function to switch to list view */
function switchToListView() {
    tableDisplay.style.display = "none";
    listDisplay.style.display = "block";
    grid_listTextDisplay.innerText = "List View";
    dropdownContent.style.display = "none";
    dropdownViewType.innerText = "list";
    dropdownIcon.innerText = dropdownIcon.innerText === "expand_more" ? "expand_less" : "expand_more";
}

function hideTableButton(){
    tableViewButton.style.display="none";
}

function showTableButton(){
    tableViewButton.style.display="flex"
}


// event listener to switch to list view
listView.addEventListener("click", switchToListView);


/** Event listener for table view dropdown */
dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event from bubbling up
    dropdownContent.style.display = 
        dropdownContent.style.display === "block" ? "none" : "block";
        dropdownIcon.innerText = dropdownIcon.innerText === "expand_more" ? "expand_less" : "expand_more";
});


/** Event Listener to oepn Modal */
openModalBtn.addEventListener('click', () => {
    modal.style.display = "block"
    setTimeout(() => {
        modal.classList.add("show"); // Apply transition
    }, 10);
    overlay.style.display = 'block';
});

/** Event listener to close Modal */
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove("show"); // Start slide-out animation
    setTimeout(() => {
        modal.style.display = "none"; // Hide after animation
    }, 500);
    overlay.style.display = 'none';

});

/** Event listener to close Modal when clicking off references Modal */
document.body.addEventListener('click', (event) => {
    // Check if modal is open
    if (modal.style.display === 'block' && !modal.contains(event.target) && event.target !== openModalBtn) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
});

/** Event Listener to responsive resize patient table view (keeps form when page is reloaded) */
window.addEventListener("load", ()=>{
    if (window.innerWidth <= 650) {
        switchToListView()
        hideTableButton()
    } 
})

/** Event Listener to responsive resize patient table view */
window.addEventListener("resize", () => {
    if (window.innerWidth <= 650) {
        switchToListView();
        hideTableButton()
    }
});

window.addEventListener("resize", () =>{
    if (window.innerWidth > 650){
        showTableButton();
    }
})

/** Event Listener to hides words of patient table list elements when page is resized*/
document.addEventListener("DOMContentLoaded", () => {
    // Select all headers and subheaders
    const toggles = document.querySelectorAll(".patient-question-list-subheader, .patient-question-list-text-header");
    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            // Find the next `.patient-question-list-text` sibling and toggle visibility
            let nextElement = toggle.nextElementSibling;
            while (nextElement && !nextElement.classList.contains("patient-question-list-text")) {
                nextElement = nextElement.nextElementSibling;
            }

            if (nextElement) {
                nextElement.style.display = nextElement.style.display === "none" || nextElement.style.display === "" ? "block" : "none";
            }
        });
    });
});