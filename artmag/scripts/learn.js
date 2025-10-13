// scripts/learn.js
document.addEventListener("DOMContentLoaded", () => {
  const learnGallery = document.getElementById("learnGallery");

  const styles = [
    {
      name: "Abstract",
      image: "images/abstract1.jpg",
      description: "Focuses on colors, shapes, and motion instead of real-world objects. Encourages free expression.",
      link: "https://www.tate.org.uk/art/art-terms/a/abstract-art"
    },
    {
      name: "Modern",
      image: "images/modernart.jfif",
      description: "Characterized by innovation and experimentation with new materials and artistic techniques.",
      link: "https://www.moma.org/"
    },
    {
      name: "Sketching",
      image: "images/sketch.jfif",
      description: "Captures outlines and ideas quickly. Often used as preparation for paintings or sculpture.",
      link: "https://www.drawingtutorials101.com/"
    },
    {
      name: "Realism",
      image: "images/realism.jfif",
      description: "Depicts everyday subjects accurately, showing life as it truly is with no embellishment.",
      link: "https://www.theartstory.org/movement/realism/"
    },
    {
      name: "Contemporary",
      image: "images/contemporary.jfif",
      description: "Reflects modern-day issues and creative exploration using multimedia and technology.",
      link: "https://www.saatchigallery.com/"
    },
    {
      name: "Pop Art",
      image: "images/popart.jfif",
      description: "Draws from pop culture — ads, comics, and celebrities — emphasizing bright colors and irony.",
      link: "https://www.tate.org.uk/art/art-terms/p/pop-art"
    }
  ];

  learnGallery.innerHTML = ""; // clear any old content

  styles.forEach(style => {
    const card = document.createElement("div");
    card.className = "style-card";
    card.innerHTML = `
      <img src="${style.image}" alt="${style.name} Art Example">
      <div class="style-content">
        <h3>${style.name}</h3>
        <p>${style.description}</p>
        <a href="${style.link}" target="_blank" class="learn-btn">Learn More</a>
      </div>
    `;
    learnGallery.appendChild(card);
  });
});
