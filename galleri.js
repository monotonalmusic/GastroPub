async function makeGallery () {
    try {
        const response = await fetch ("https://gastropub.webexam-mcdm.dk/api/images");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        let main = document.getElementById('main-div');
        let galleryTop = document.createElement("div");
        let galleryMain = document.createElement("div");
        galleryTop.classList.add("gallery-top");
        galleryMain.classList.add("gallery-main");
        main.prepend(galleryTop);
        main.append(galleryMain);
        data.forEach(item => {
            let galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");
            galleryItem.innerHTML = `
                <img src="${item.url}">
            `;
            galleryItem.addEventListener("click", () => {
                if (galleryMain.querySelector(".modal")) {
                    galleryMain.querySelector(".modal").remove();
                };
                let modal = document.createElement("div");
                modal.classList.add("modal");
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <img src="${item.url}">
                    </div>
                `;
                galleryMain.append(modal);
            });
            galleryTop.append(galleryItem);
            console.log(item);
        });


    } 
    catch (error) {
        console.log(error);
    }
}

makeGallery();