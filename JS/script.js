// Variaveis
const btnHeartLine = document.querySelector(".favoriteLine i");
const btnHeartFull = document.querySelector(".favorite i");
const btnFavorite = document.querySelector(".btnFavorite");

const mainImage = document.querySelector(".mainImage img");
const imageAlt1 = document.querySelector(".alt1");
const imageAlt2 = document.querySelector(".alt2");
const imageAlt3 = document.querySelector(".alt3");
const imageAlt4 = document.querySelector(".alt4");

// Fazer coração ficar completo após click
btnHeartLine.addEventListener("click", () =>{
    btnHeartLine.style.display = "none";
    btnHeartFull.style.display = "inline-block";
});
btnHeartFull.addEventListener("click", () =>{
    btnHeartFull.style.display = "none";
    btnHeartLine.style.display = "inline-block";
});

//Fazer imagem principal dar zoom ao passar o mouse
mainImage.addEventListener("mousemove", (e) =>{
    const eixoX = e.clientX - e.target.offsetLeft;
    const eixoY = e.clientY - e.target.offsetTop;
    mainImage.style.transformOrigin = `${eixoX}px ${eixoY}px`;
    mainImage.style.transform = "scale(1.8)";
    mainImage.classList.add("active");
});

// Fazer imagem principal voltar ao normal ao tirar o mouse
mainImage.addEventListener("mouseleave", () =>{
    mainImage.style.transform = "scale(1)";
    mainImage.classList.remove("active");
});

// Fazer alterar imagem principal mudar de acordo seleção da imagem
imageAlt1.addEventListener("click", () =>{
    mainImage.src = "./IMG/prod1.jpg"
});
imageAlt2.addEventListener("click", () =>{
    mainImage.src = "./IMG/prod2.jpg"
});
imageAlt3.addEventListener("click", () =>{
    mainImage.src = "./IMG/prod3.jpg"
});
imageAlt4.addEventListener("click", () =>{
    mainImage.src = "./IMG/prod4.jpg"
});

// Produto ser favoritado pelo botão da Main Section
btnFavorite.addEventListener("click", () =>{
    btnHeartLine.style.display = "none";
    btnHeartFull.style.display = "inline-block";
});

