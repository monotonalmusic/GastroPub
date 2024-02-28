import data from "./fetch.js";

async function fetchMenu() {
        let menu = await data.fetch("https://gastropub.webexam-mcdm.dk/api/menus");
        menu.forEach(item => {
            let menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <h1 class="item-name">${item.name} (${item.id})</h1>
                <p class="item-ingredients">${item.ingredients}</p>
                <p class="item-price">${item.price}</p>
            `;
            let main = document.getElementById('main-div');
            main.append(menuItem);
            console.log(item);
        });

}

fetchMenu();







