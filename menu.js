async function fetchMenu() {
    try {
        const response = await fetch("https://gastropub.webexam-mcdm.dk/api/menus");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        data.forEach(item => {
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
    catch (error) {
        console.log(error);
    }
    
}

fetchMenu();







