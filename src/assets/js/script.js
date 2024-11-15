// Executes the code after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Shows and hides the dropdown menus (PC version of the website)
    // Get the buttons
    const buttonApps = document.getElementById("apps");
    const buttonServers = document.getElementById("servers");
    const buttonAbout = document.getElementById("about");
    // Get the hover divs
    const hoverApps = document.getElementById("hover-apps");
    const hoverServers = document.getElementById("hover-servers");
    const hoverAbout = document.getElementById("hover-about");
    // Get the dropdown divs
    const dropdownApps = document.getElementById("dropdown-apps");
    const dropdownServers = document.getElementById("dropdown-servers");
    const dropdownAbout = document.getElementById("dropdown-about");

    // Create the arrays with all of the elements of each category
    const allDivsApps = [buttonApps, hoverApps, dropdownApps];
    const allDivsServers = [buttonServers, hoverServers, dropdownServers];
    const allDivsAbout = [buttonAbout, hoverAbout, dropdownAbout];

    // Show functions (This functionality works only with larger displays)

    // Function to show all the 'Apps' elements
    function showDivsApps() {
        if (window.innerWidth > 863 && !window.matchMedia("(pointer: coarse)").matches) { // When the screen width is above 863px and the device doesn't have a touch screen
            toggleDropdownMenu(0, 1);
        }
    }
    // Function to show all the 'Servers' elements
    function showDivsServers() {
        if (window.innerWidth > 863 && !window.matchMedia("(pointer: coarse)").matches) {
            toggleDropdownMenu(1, 1);
        }
    }
    // Function to show all the 'About' elements
    function showDivsAbout() {
        if (window.innerWidth > 863 && !window.matchMedia("(pointer: coarse)").matches) {
            toggleDropdownMenu(2, 1);
        }
    }

    // Hide functions (This functionality works only with larger displays)

    // Function to hide all the 'Apps' elements
    function hideDivsApps() {
        if (window.innerWidth > 863) {
            toggleDropdownMenu(0, 0);
        }
    }
    // Function to hide all the 'Servers' elements
    function hideDivsServers() {
        if (window.innerWidth > 863) {
            toggleDropdownMenu(1, 0);
        }
    }
    // Function to hide all the 'About' elements
    function hideDivsAbout() {
        if (window.innerWidth > 863) {
            toggleDropdownMenu(2, 0);
        }
    }

    // Shows the 'Apps' elements
    allDivsApps.forEach(div => {
        div.addEventListener('mouseenter', showDivsApps);
    });

    // Hides the 'Apps' elements
    allDivsApps.forEach(div => {
        div.addEventListener('mouseleave', (event) => {
            const relatedTarget = event.relatedTarget;
            if (!buttonApps.contains(relatedTarget) && !hoverApps.contains(relatedTarget) && !dropdownApps.contains(relatedTarget)) {
                hideDivsApps();
            }
        });
    });

    // Shows the 'Servers' elements
    allDivsServers.forEach(div => {
        div.addEventListener('mouseenter', showDivsServers);
    });

    // Hides the 'Servers' elements
    allDivsServers.forEach(div => {
        div.addEventListener('mouseleave', (event) => {
            const relatedTarget = event.relatedTarget;
            if (!buttonServers.contains(relatedTarget) && !hoverServers.contains(relatedTarget) && !dropdownServers.contains(relatedTarget)) {
                hideDivsServers();
            }
        });
    });

    // Shows the 'About' elements
    allDivsAbout.forEach(div => {
        div.addEventListener('mouseenter', showDivsAbout);
    });

    // Hides the 'Apps' elements
    allDivsAbout.forEach(div => {
        div.addEventListener('mouseleave', (event) => {
            const relatedTarget = event.relatedTarget;
            if (!buttonAbout.contains(relatedTarget) && !hoverAbout.contains(relatedTarget) && !dropdownAbout.contains(relatedTarget)) {
                hideDivsAbout();
            }
        });
    });

    // Listener to the window resizing
    window.addEventListener("resize", checkWidth);
});

// This function checks the width of the window and corrects any errors
function checkWidth() {
    // Get the div containing the menu items
    const menuItems = document.getElementById("menu-items");
    // If the width of the window is above 863px then close the menu, in the other case correct any errors
    if (window.innerWidth > 863) {
        toggleMenu(0);
    } else {
        // Executes the code after 6 ms to give time to the viewport to update its width
        setTimeout(() => {
            // Corrects any errors when resizing the window if the menu is open/closed
            if (menuItems.style.display === "flex") {
                toggleMenu(1);
            } else {
                toggleMenu(0);
            }
        }, 6);
    }
}

// Function to open and close the mobile menu
function toggleMenu(boolean) { // The boolean paramether is to manually open or close the menu
    // Get the svg image of the button
    const svgMenu = document.getElementById("svg-menu");
    // Get the div containing the menu tools
    const menuTools = document.getElementById("menu-tools");
    // Get the div containing the menu items
    const menuItems = document.getElementById("menu-items");
    // Get the navbar
    const navbar = document.querySelector("nav.navbar");

    // Verifies if the menus are opened or closed
    if ((menuItems.style.display === "" && boolean === undefined) || boolean === 1) {
        // The menu is closed and has to be opened

        // Modifies the svg image of the button
        svgMenu.innerHTML = `<path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>`;
        // Shows the menu tools only if the web page isn't big enough
        if (window.innerWidth < 423) {
            // Shows the menu tools
            menuTools.style.display = "flex";
        }
        // Shows the menu items
        menuItems.style.display = "flex";
        // Change the background color of the navbar to #191919
        navbar.style.backgroundColor = "#191919";
        // Disables the scrolling in the main page
        document.body.style.overflow = "hidden";
    } else {
        // The menu is open and has to be closed

        // Modifies the svg image of the button
        svgMenu.innerHTML = `<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>`;
        // Hides the menu tools only if the web page isn't big enough
        if (window.innerWidth < 423) {
            // Hides the menu tools
            menuTools.style.display = "";
        }
        // Hides the menu items
        menuItems.style.display = "";
        // Change the background color of the navbar to default
        navbar.style.backgroundColor = "rgba(31, 31, 31, 0.5)";
        // Enables the scrolling in the main page
        document.body.style.overflow = "auto";
    }
    // Returns the value of the display attribute to know if the menu has been opened or closed
    return menuItems.style.display;
}

// Function to open and close the dropdown menus
function toggleDropdownMenu(id, boolean) { // The boolean paramether is to manually open or close the dropdown menus
    // Variable declaration
    let button, arrow, hoverDiv, dropdownDiv;
    // Declares the menu container
    const menuItems = document.getElementById("menu-items");
    // Switch to identify which button has been pressed
    switch (id) {
        case 0:
            button = document.getElementById("apps");
            arrow = document.getElementById("svg-apps");
            // if the menu is closed, the hover divs can be modified
            if (menuItems.style.display === "") {
                hoverDiv = document.getElementById("hover-apps");
            }
            dropdownDiv = document.getElementById("dropdown-apps");
            // Prevents multiple dropdown menus from being open at the same time in the mobile version of the menu
            if (window.innerWidth <= 863) {
                if (document.getElementById("dropdown-servers").classList.contains("fade-in")) {
                    toggleDropdownMenu(1, 0);
                } else if (document.getElementById("dropdown-about").classList.contains("fade-in")) {
                    toggleDropdownMenu(2, 0);
                }
            }
        break;
        case 1:
            button = document.getElementById("servers");
            arrow = document.getElementById("svg-servers");
            // if the menu is closed, the hover divs can be modified
            if (menuItems.style.display === "") {
                hoverDiv = document.getElementById("hover-servers");
            }
            dropdownDiv = document.getElementById("dropdown-servers");
            // Prevents multiple dropdown menus from being open at the same time in the mobile version of the menu
            if (window.innerWidth <= 863) {
                if (document.getElementById("dropdown-apps").classList.contains("fade-in")) {
                    toggleDropdownMenu(0, 0);
                } else if (document.getElementById("dropdown-about").classList.contains("fade-in")) {
                    toggleDropdownMenu(2, 0);
                }
            }
        break;
        case 2:
            button = document.getElementById("about");
            arrow = document.getElementById("svg-about");
            // if the menu is closed, the hover divs can be modified
            if (menuItems.style.display === "") {
                hoverDiv = document.getElementById("hover-about");
            }
            dropdownDiv = document.getElementById("dropdown-about");
            // Prevents multiple dropdown menus from being open at the same time in the mobile version of the menu
            if (window.innerWidth <= 863) {
                if (document.getElementById("dropdown-apps").classList.contains("fade-in")) {
                    toggleDropdownMenu(0, 0);
                } else if (document.getElementById("dropdown-servers").classList.contains("fade-in")) {
                    toggleDropdownMenu(1, 0);
                }
            }
        break;
    }
    if ((dropdownDiv.classList.contains("hidden") && boolean === undefined) || boolean === 1) {
        // If the dropdown is closed and has to be opened

        // If the menu is opened
        if (menuItems.style.display === "flex") {
            button.style.marginBottom = "184px";
        }
        arrow.style.transform = "rotate(180deg)";
        // hoverDiv has to be defined in order to change it
        if (hoverDiv !== undefined) {
            hoverDiv.style.display = "flex";
        }
        dropdownDiv.classList.remove("hidden");
        dropdownDiv.classList.add("fade-in");
        return true;
    } else {
        // If the dropdown is open and has to be closed

        // Sets the margin of the button in every case since this is the default value
        button.style.marginBottom = "8px";
        // Reset the rotation of the svg arrow
        arrow.style.transform = "rotate(0deg)";
        // hoverDiv has to be defined in order to change it
        if (hoverDiv !== undefined) {
            hoverDiv.style.display = "";
        }
        dropdownDiv.classList.remove("fade-in");
        dropdownDiv.classList.add("hidden");
        return false;
    }
}