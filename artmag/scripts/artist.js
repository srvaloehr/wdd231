// artist.js
document.addEventListener("DOMContentLoaded", async () => {
  const artistGallery = document.getElementById("artist-gallery");
  const modal = document.getElementById("artistModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const closeModalBtn = document.getElementById("closeModal");

  // Fetch artists from local JSON
  try {
    const response = await fetch("data/artists.json");
    if (!response.ok) throw new Error("Failed to load artist data");
    const artists = await response.json();

    // Create 15 uniform artist cards dynamically
    artists.forEach((artist) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="images/${artist.name.toLowerCase().split(' ')[0]}.jfif" alt="${artist.famousWork} by ${artist.name}">
        <div class="card-content">
          <h3>${artist.name}</h3>
          <p><strong>Style:</strong> ${artist.style}</p>
          <p><strong>Country:</strong> ${artist.country}</p>
          <p><strong>Famous Work:</strong> ${artist.famousWork}</p>
          <button class="info-btn" data-artist="${artist.name}">More Info</button>
        </div>
      `;

      // Add event listener for modal
      card.querySelector(".info-btn").addEventListener("click", () => {
        modalTitle.textContent = artist.name;
        modalText.innerHTML = `
          <p><strong>Born:</strong> ${artist.born}</p>
          <p><strong>Style:</strong> ${artist.style}</p>
          <p><strong>Country:</strong> ${artist.country}</p>
          <p><strong>Famous Work:</strong> ${artist.famousWork}</p>
        `;
        modal.style.display = "flex";

        // Store viewed artist in localStorage
        localStorage.setItem("lastViewedArtist", artist.name);
      });

      artistGallery.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading artist data:", error);
    artistGallery.innerHTML = `<p class="error">⚠️ Could not load artist information. Please try again later.</p>`;
  }

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Display localStorage message
  const lastArtist = localStorage.getItem("lastViewedArtist");
  if (lastArtist) {
    console.log(`You last viewed ${lastArtist}`);
  }
});
