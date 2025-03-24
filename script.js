const listItems = document.querySelectorAll("li");

function activeLink() {
    listItems.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
}

listItems.forEach((li) => li.addEventListener("click", activeLink));
