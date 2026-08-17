const btnGerar = document.getElementById("btn-gerar");
const animalName = document.getElementById("animal-name");
const animalImg = document.getElementById("animal-img");

async function Animal() {
    const animais = ["cachorro", "gato", "urso", "raposa", "pato"];
    const indiceAleatorio = Math.floor(Math.random() * animais.length);
    const animalSorteado = animais[indiceAleatorio];

    animalName.innerText = "Carregando...";
    animalImg.style.display = "none";

    let imageUrl = "";

    try {
        if (animalSorteado === "cachorro") {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            imageUrl = data.message;

        } else if (animalSorteado === "gato") {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            imageUrl = data[0].url;

        } else if (animalSorteado === "urso") {
            imageUrl = `https://placebear.com/400/300?time=${Date.now()}`;

        } else if (animalSorteado === "raposa") {
            const response = await fetch("https://randomfox.ca/floof/");
            const data = await response.json();
            imageUrl = data.image;

        } else if (animalSorteado === "pato") {
            imageUrl = `https://random-d.uk/api/randomimg?t=${Date.now()}`;
        }

        animalName.innerText = animalSorteado;
        animalImg.src = imageUrl;
        animalImg.style.display = "inline-block";

    } catch (error) {
        console.error("Erro na API:", error);
        animalName.innerText = "Erro ao carregar o animal. Clique novamente!";
    }
}

btnGerar.addEventListener("click", Animal);