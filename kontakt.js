function makeKontakt () {
    let main = document.getElementById("main-div");
    let kontaktDiv = document.createElement("div");
    kontaktDiv.id = "kontakt-container";
    kontaktDiv.classList.add("flex-center");
    kontaktDiv.innerHTML = 
    `
    <div id="kontakt-content">
            <h1 id="kontakt-title">Kontakt</h1>
            <div id="kontakt-info">
            </div>
            <div id="kontakt-form">
                <form id="kontakt-form-form">
                    <input type="text" placeholder="Navn">
                    <input type="text" placeholder="Email">
                    <textarea placeholder="Besked"></textarea>
                    <button class="pretty-button">Send</button>
                </form>
            </div>
    </div>
    <div id="kontakt-info"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.889556194078!2d12.568136315823646!3d55.67601518050721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253d3c4c2a9f7%3A0x2a00c3b5f6f5c6b0!2sN%C3%B8rrebro%20Bryghus!5e0!3m2!1sda!2sdk!4v1628227388115!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    `;
    main.append(kontaktDiv);
}

makeKontakt();