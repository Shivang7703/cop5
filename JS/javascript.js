function toggleDropdown(id) {
    var dropdownContent = document.getElementById(id);
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function selectOption(option) {
    var dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.textContent = option;
    var dropdownContent = document.getElementById("dropdownList");
    dropdownContent.style.display = "none";
}