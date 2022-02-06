const favourite = [
  {
    name: "All My Friends",
    artist: "LCD Sound System",
    memory: "Pointing at my friends faces on the dancfloor",
  },

  {
    name: "Good Fortune",
    artist: "PJ Harvey",
    memory: "Swinging my handbag",
  },

  {
    name: "Annies Song",
    artist: "John Denver",
    memory: "Mum",
  },

  {
    name: "Do you realise?",
    artist: "The flaming lips",
    memory: "That one pub near the Art School",
  },

  {
    name: "Elliott Smith",
    artist: "Between the Bars",
    memory: "Travelling around Australia",
  },

  {
    name: "Buffalo Stance",
    artist: "Neneh Cherry",
    memory: "Long car rides",
  },

  {
    name: "No Children",
    artist: "The Mountain goats",
    memory: "The Cowboy, tipping his hat.",
  },

  {
    name: "Cannonball",
    artist: "The Breeders",
    memory: "Our 4th year flat",
  },

  {
    name: "I love to hate you",
    artist: "Erasure",
    memory: "Every single breakup ever",
  },

  {
    name: "Get Free",
    artist: "Major lazer",
    memory: "That last year in Scotland",
  },
];

favourite.forEach(showCard);

function showCard(favouriteSong) {
  const templateElement = document.querySelector("#songTemplate").content;
  const myClone = templateElement.cloneNode(true);

  myClone.querySelector(".song").textContent = favouriteSong.name;
  myClone.querySelector(".artist").textContent = favouriteSong.artist;
  myClone.querySelector(".memory").textContent = favouriteSong.memory;
  const parentElement = document.querySelector("body");
  parentElement.appendChild(myClone);
}
