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