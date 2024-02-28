import data from "./fetch.js";

async function makeGallery () {
        let gallery = await data.fetch("https://gastropub.webexam-mcdm.dk/api/images");
        let sortedData = gallery.slice(13, 20)
        let galleryDiv = document.querySelector(".gallery-div");
        let galleryTop = document.querySelector(".gallery-top");
        let galleryMain = document.querySelector(".gallery-main");
        galleryDiv.append(galleryTop);
        galleryDiv.prepend(galleryMain);
        sortedData.forEach(item => {
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
                    <img src="${item.url}">

                `;
                galleryMain.append(modal);
            });
            galleryTop.append(galleryItem);
            console.log(item);
        });

}

makeGallery();