// script.js

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

// Fonction pour fetch un gif aléatoire selon la catégorie
async function fetchRandomGif(category) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.status);
    }

    const data = await response.json();

    // Extraire l'URL du gif
    const gifURL = data.data.images.original.url;
    return gifURL;

  } catch (error) {
    console.log("Error fetching GIF:", error);
    alert("Impossible de récupérer le GIF. Vérifie ta catégorie !");
  }
}

// Fonction pour ajouter un GIF au DOM
function appendGif(url) {
  const gifWrapper = document.createElement("div");
  gifWrapper.style.marginBottom = "10px";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "GIF";
  img.style.width = "200px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.style.marginLeft = "10px";

  // Supprimer ce GIF spécifique
  deleteBtn.addEventListener("click", () => {
    gifWrapper.remove();
  });

  gifWrapper.appendChild(img);
  gifWrapper.appendChild(deleteBtn);
  gifContainer.appendChild(gifWrapper);
}

// Événement sur le formulaire
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const category = input.value.trim();
  if (category === "") return;

  const gifURL = await fetchRandomGif(category);
  if (gifURL) {
    appendGif(gifURL);
  }

  input.value = ""; // Reset input
});

// Événement pour supprimer tous les GIFs
deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
