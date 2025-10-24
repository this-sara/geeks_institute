const characterCard = document.getElementById('character-card');
const findBtn = document.getElementById('find-btn');

// Function to get random character ID
function getRandomId() {
  return Math.floor(Math.random() * 83) + 1; // 1 to 83
}

// Function to fetch character data
async function fetchCharacter() {
  const id = getRandomId();
  characterCard.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Loading...`;

  try {
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
    if (!res.ok) throw new Error('Character not found');

    const data = await res.json();
    const character = data.result.properties;

    characterCard.innerHTML = `
      <h2>${data.result.properties.name}</h2>
      <p>Height: ${character.height}</p>
      <p>Gender: ${character.gender}</p>
      <p>Birth Year: ${character.birth_year}</p>
      <p>Home World: ${await fetchHomeworld(character.homeworld)}</p>
    `;
  } catch (error) {
    characterCard.innerHTML = `<p class="error">Oh No! That person isn't available.</p>`;
  }
}

// Function to get homeworld name
async function fetchHomeworld(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.result.properties.name;
  } catch {
    return 'Unknown';
  }
}

// Event listener
findBtn.addEventListener('click', fetchCharacter);
