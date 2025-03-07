// Task 2 Employee Card additions 

function createEmployeeCard (name, position) {
    const container = document.getElementById("employeeContainer");

    const card = document.createElement ("div");
    card.setAttribute("class", "employeeCard");
    // employee card div 

    const nameHeading  = document.createElement("h3");
    nameHeading.textContent = name;
    const positionParagraph = document.createElement("p");
    positionParagraph.textContent = `Position: ${position}`;
    // employee card formatting 

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "remove-btn");
    // remove button set up 

    removeButton.addEventListener("click", function () {
        container.removeChild(card);
    });

    //Appending elements to the cards 
    card.appendChild(nameHeading);
    card.appendChild(positionParagraph);
    card.appendChild(removeButton);
    container.appendChild(card);
}

//Test Cases 
createEmployeeCard("Maria Johnson", "Cashier");
createEmployeeCard("Harry Whitman", "Janitor");
createEmployeeCard("Kenny Grant", "Analyst"); 

//Task 3 Converting NodeLists to Arrays for Bulk Updates 

function highlightEmployeeCards(){
    const employeeCards = document.querySelectorAll(".employeeCard");
    // employee card selection 

    const cardArray = Array.from(employeeCards);

    cardArray.forEach(card => {
        card.style.backgroundColor = "pink";
        card.style.border = "2px solid black"
    });
// adding background color and borders
}

highlightEmployeeCards();

// Task 4 Implementing Removal of Employee Cards with Event Bubbling

document.addEventListener("DOMContentLoaded", function (){
    const container = document.getElementById("employeeContainer");

    if (!container) {
        console.error("#employee container not found");
        return;
    }

    container.addEventListener("click", function(event) {
        const card = event.target.closest(".employeeCard");
        if (card && !event.target.classList.contains("remove-btn")) {
            console.log("Employee card selected", card);
        }
    });
// adding event listener to parent container 

// adding listener to each remove button 
container.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        event.stopPropagation();
        const card = event.target.closest(".employeeCard");
        if (card) {
            card.remove();
        }
    }
});
});