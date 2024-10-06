// Shows and hides the dropdown menus
// Executes the code after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
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
        dropdownApps.style.display = "flex";
    }
    // Function to show all the 'Servers' elements
    function showDivsServers() {
        hoverServers.style.display = "flex";
        dropdownServers.style.display = "flex";
    }
    // Function to show all the 'About' elements
    function showDivsAbout() {
        hoverAbout.style.display = "flex";
        dropdownAbout.style.display = "flex";
    }

    // Hide functions

    // Function to hide all the 'Apps' elements
    function hideDivsApps() {
        hoverApps.style.display = "";
        dropdownApps.style.display = "";
    }
    // Function to hide all the 'Servers' elements
    function hideDivsServers() {
        hoverServers.style.display = "";
        dropdownServers.style.display = "";
    }
    // Function to hide all the 'About' elements
    function hideDivsAbout() {
        hoverAbout.style.display = "";
        dropdownAbout.style.display = "";
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
});

// Function to open and close the mobile menu
function toggleMenu() {
    // Get the svg image of the button
    const svgMenu = document.getElementById("svg-menu");
    // Get the div containing the menu
    const menu = document.getElementById("menu");

    // Verifies if the menu is open or closed
    if (menu.style.display === "") {
        // The menu is closed and has to be opened

        // Modifies the svg image of the button
        svgMenu.innerHTML = `<path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>`;
        // Shows the menu
        menu.style.display = "block";
        // Disables the scrolling in the main page
        document.body.style.overflow = "hidden";
    } else {
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

function toggleDropdownMenu() {
    
}