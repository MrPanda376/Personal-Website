function showMenu() {
    // Tries to get the element 'button' with the id 'false' because it assumes that the menu is closed
    let toggleMenu = document.getElementById("false");
    // Selects the svg image of the button
    const svgMenu = document.getElementById("svg-menu");
    // Get the div containing the menu
    const menu = document.getElementById("menu");

    // Verifies if the menu is open or closed
    if (toggleMenu !== null) {
        // The menu is closed and has to be opened

        // Modifies the svg image of the button
        svgMenu.innerHTML = `<path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>`;
        // Modifies the id of the button to update the status of the menu
        toggleMenu.id = "true";
        // Shows the menu
        menu.style.display = "block";
        // Disables the scrolling in the main page
        document.body.style.overflow = "hidden";
    } else {
        // The menu is open and has to be closed

        // Selects the button with the proper id
        toggleMenu = document.getElementById("true");

        // Modifies the svg image of the button
        svgMenu.innerHTML = `<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>`;
        // Modifies the id of the button to update the status of the menu
        toggleMenu.id = "false";
        // Hides the menu
        menu.style.display = "none";
        // Enables the scrolling in the main page
        document.body.style.overflow = "auto";
    }
    // Shows the current value
    return toggleMenu.id;
}