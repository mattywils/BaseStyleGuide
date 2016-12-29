function toggleMenu(menuId) {
    var menuElement = document.getElementById(menuId);
    if(menuElement.className === "open") {
        menuElement.className = "closed";
    } else {
        menuElement.className = "open";
    }
}