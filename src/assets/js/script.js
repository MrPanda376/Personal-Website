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
    // Get the svgs
    const svgApps = document.getElementById("svg-apps");
    const svgServers = document.getElementById("svg-servers");
    const svgAbout = document.getElementById("svg-about");

    // Create the arrays with all of the elements of each category
    const allDivsApps = [buttonApps, hoverApps, dropdownApps];
    const allDivsServers = [buttonServers, hoverServers, dropdownServers];
    const allDivsAbout = [buttonAbout, hoverAbout, dropdownAbout];

    // Show functions

    // Function to show all the 'Apps' elements
    function showDivsApps() {
        hoverApps.style.display = "flex";
        dropdownApps.classList.remove("hidden");
        dropdownApps.classList.add("fade-in");
        svgApps.style.transform = "rotate(180deg)";
    }
    // Function to show all the 'Servers' elements
    function showDivsServers() {
        hoverServers.style.display = "flex";
        dropdownServers.classList.remove("hidden");
        dropdownServers.classList.add("fade-in");
        svgServers.style.transform = "rotate(180deg)";
    }
    // Function to show all the 'About' elements
    function showDivsAbout() {
        hoverAbout.style.display = "flex";
        dropdownAbout.classList.remove("hidden");
        dropdownAbout.classList.add("fade-in");
        svgAbout.style.transform = "rotate(180deg)";
    }

    // Hide functions

    // Function to hide all the 'Apps' elements
    function hideDivsApps() {
        hoverApps.style.display = "";
        dropdownApps.classList.remove("fade-in");
        dropdownApps.classList.add("hidden");
        svgApps.style.transform = "rotate(0deg)";
    }
    // Function to hide all the 'Servers' elements
    function hideDivsServers() {
        hoverServers.style.display = "";
        dropdownServers.classList.remove("fade-in");
        dropdownServers.classList.add("hidden");
        svgServers.style.transform = "rotate(0deg)";
    }
    // Function to hide all the 'About' elements
    function hideDivsAbout() {
        hoverAbout.style.display = "";
        dropdownAbout.classList.remove("fade-in");
        dropdownAbout.classList.add("hidden");
        svgAbout.style.transform = "rotate(0deg)";
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

// Function to check if the width of the window is too large to display the menu
function checkWidth() {
    if (window.innerWidth > 992) {
        toggleMenu(0);
    }
}

// Function to open and close the mobile menu
function toggleMenu(boolean) { // The boolean paramether is to manually open or close the menu
    // Get the svg image of the button
    const svgMenu = document.getElementById("svg-menu");
    // Get the div containing the menu
    const menu = document.getElementById("menu");

    // Verifies if the menu is open or closed
    if ((menu.style.display === "" && boolean === undefined) || boolean === 1) {
        // The menu is closed and has to be opened

        // Modifies the svg image of the button
        svgMenu.innerHTML = `<path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>`;
        // Shows the menu
        menu.style.display = "block";
        // Disables the scrolling in the main page
        document.body.style.overflow = "hidden";
    } else if ((menu.style.display === "block" && boolean === undefined) || boolean === 0) {
        // The menu is open and has to be closed

        // Modifies the svg image of the button
        svgMenu.innerHTML = `<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>`;
        // Hides the menu
        menu.style.display = "";
        // Enables the scrolling in the main page
        document.body.style.overflow = "auto";
    }
    // Returns the value of the display attribute
    return menu.style.display;
}

function toggleDropdownMenu(id) {
    // Variable declaration
    let arrow, hoverDiv, dropdownDiv;
    // Switch to identify which button has been pressed
    console.log(hoverDiv);
    switch (id) {
        case 0:
            arrow = document.getElementById("svg-apps");
            hoverDiv = document.getElementById("hover-apps");
            dropdownDiv = document.getElementById("dropdown-apps");
        break;
        case 1:
            arrow = document.getElementById("svg-servers");
            hoverDiv = document.getElementById("hover-servers");
            dropdownDiv = document.getElementById("dropdown-servers");
        break;
        case 2:
            arrow = document.getElementById("svg-about");
            hoverDiv = document.getElementById("hover-about");
            dropdownDiv = document.getElementById("dropdown-about");
        break;
        case 3:
            arrow = document.getElementById("svg-apps-menu");
            dropdownDiv = document.getElementById("dropdown-apps-menu");
        break;
        case 4:
            arrow = document.getElementById("svg-servers-menu");
            dropdownDiv = document.getElementById("dropdown-servers-menu");
        break;
        case 5:
            arrow = document.getElementById("svg-about-menu");
            dropdownDiv = document.getElementById("dropdown-about-menu");
        break;
    }
    if (dropdownDiv.classList.contains("hidden")) {
        // If the dropdown is closed
        arrow.style.transform = "rotate(180deg)";
        // hoverDiv has to be defined in order to change it
        if (hoverDiv !== undefined) {
            hoverDiv.style.display = "flex";
        }
        dropdownDiv.classList.remove("hidden");
        dropdownDiv.classList.add("fade-in");
    } else {
        // If the dropdown is open
        arrow.style.transform = "rotate(0deg)";
        // hoverDiv has to be defined in order to change it
        if (hoverDiv !== undefined) {
            hoverDiv.style.display = "";
        }
        dropdownDiv.classList.remove("fade-in");
        dropdownDiv.classList.add("hidden");
    }
}