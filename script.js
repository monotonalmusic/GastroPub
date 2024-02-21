let picURL = "https://gastropub.webexam-mcdm.dk/api/images";
let textURL = "https://gastropub.webexam-mcdm.dk/api/texts";

function getResponse (URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

}

