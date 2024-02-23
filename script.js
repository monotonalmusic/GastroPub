function makeHeader () {
    let container = document.getElementById("container"); // Add this line to get the container element
    if (!container) console.log('container not found'); // Add this line to check if the container element exists
    let header = document.createElement("header");
    header.id = "header-div";
    header.innerHTML = 
    `
        <div id="header-content">
            <a href="index.html"><img id="header-logo" src="gastro-pub.svg"></a>
            <nav id="header-nav">
                <ul id="header-list">
                    <div class="dropdown">
                        <li><a href="about.html">Om os <i class="arrow down"></i> </a></li>
                        <div class="dropdown-content">
                            <a href="about.html">Historie</a>
                            <a href="about.html">Vores Team</a>
                        </div>
                    </div>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="galleri.html">Galleri</a></li>
                    <li><a href="kontakt.html">Kontakt</a></li>
                    <button class="pretty-button">Bestil Bord</button>
                </ul>
            </nav>
        </div>
    `;
    container.prepend(header);
};


function makeFooter () {
    let container = document.getElementById("container"); // Add this line to get the container element
    if (!container) console.log("container not found"); // Add this line to check if the container element exists
    let footer = document.createElement("footer");
    footer.id = "footer-div";
    footer.innerHTML = 
    `
        <div id="footer-content">
            <div id="info-div">
                <h2 class="footer-text">Information</h2>
                <p class="footer-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quibusdam ipsam ipsa doloremque commodi amet deleniti corporis libero inventore eius.</p>
            </div>
            <div id="kontakt-div">
                <h2 class="footer-text">Kontakt</h2>
                <p class="footer-text">Telefon: 12345678</p>
                <p class="footer-text">Adresse: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="social-div">
                <h2 class="footer-text">Social Media</h2>
                <div id="social-logo-div">
                    <img>
                    <img>
                    <img>
                </div>
            </div>
        </div>
    `;
    container.append(footer);

};

function onLoad () {
    makeHeader();
    makeFooter();
};

onLoad();