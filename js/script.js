/*Hove navbar*/
document.querySelectorAll('.nav-item.dropdown').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-menu').classList.add('show');
    });

    element.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});
//Dropdown
function toggleDropdown(link) {
    var dropdownMenu = link.nextElementSibling;
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}

// Close dropdown
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("../include/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("../include/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("foot").innerHTML = data);
});