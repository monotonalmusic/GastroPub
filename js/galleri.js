async function makeGallery () {
    try {
        const response = await fetch ("https://gastropub.webexam-mcdm.dk/api/images");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        let sortedData = data.slice(13, 20)
        let startImg = sortedData[0].url;
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
    catch (error) {
        console.log(error);
    }
}

makeGallery();