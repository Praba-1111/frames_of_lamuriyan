// Gallery data - The user can add their images and stories here.
const galleryData = [
  {
    id: 1,
    src: "photohraphs/Kathakali.jpeg",
    title: "Eyes of Kathakali",
    story: "The bold colours and dramatic makeup of Kathakali immediately drew my attention, but it was the eyes that truly held my frame. The intense expression seemed to tell a story without a single word. I captured that fleeting moment where tradition, emotion, and art came together in one powerful look."
  },
  {
    id: 2,
    src: "photohraphs/Mohiniyattam.jpeg",
    title: "Mohiniyattam",
    story: "The gentle movements of Mohiniyattam caught my eye, especially the elegance in the dancer’s posture and expression. The flowing costume and subtle movement created a sense of calm and beauty within the frame. I captured this moment to preserve the quiet grace that made the performance so captivating."
  },
  {
    id: 3,
    src: "photohraphs/Stranger_Anaikatti.jpeg",
    title: "A Quiet Moment",
    story: "An old man sitting quietly on the ground caught my attention in the middle of an ordinary day. There was something peaceful in his stillness, as if he was lost in his own thoughts. I captured the moment because sometimes the simplest faces and quiet moments tell the most honest stories."
  },
  {
    id: 4,
    src: "photohraphs/Stranger_Chennai.jpeg",
    title: "Between Trains and Dreams",
    story: "At a busy railway station in Chennai, I noticed a man quietly selling cotton candy and small toys to passing strangers. While people hurried toward their trains, he stood there waiting for someone to stop and buy. His simple work reminded me that behind every crowded station, there are unseen lives, quiet struggles, and dreams that keep moving forward."
  },
  {
    id: 5,
    src: "photohraphs/Fish_wild.jpeg",
    title: "After a Night of Rain",
    story: "After a full night of rain, the lake was wrapped in a soft mist as the first morning light appeared through the clouds. A fish quietly breaking the stillness of the water caught my attention and became the heart of the frame. It was a peaceful moment where the freshness of rain, morning light, and life in the lake came together naturally."
  },
  {
    id: 6,
    src: "photohraphs/Dog_Street.jpeg",
    title: "Light Finds Everyone",
    story: "A muddy dog sitting quietly caught my attention as the sunlight gently fell across its back. The contrast between its muddy body and the warm light created a simple yet striking frame. Sometimes, beauty can be found in the quietest and most ordinary moments."
  },
  {
    id: 7,
    src: "photohraphs/Anaikatti_Hill.jpeg",
    title: "Between Sun and Clouds",
    story: "The hills of Anaikatti looked different in the soft evening light, with the sun slowly moving behind the clouds. Around 4:30 PM, the gentle sunlight touched the hills while the clouds added depth and mood to the scene. I captured this moment where the changing light made the familiar hills feel calm, dramatic, and beautifully alive."
  }
  /*{
    id: 6,
    src: "logo.jpeg",
    title: "Sample Title",
    story: "Sample Story"
  },*/
  /*{
    id: 7,
    src: "logo.jpeg",
    title: "Sample Title",
    story: "Sample Story"
  }*/
  /*{
    id: 6,
    src: "logo.jpeg",
    title: "Sample Title",
    story: "Sample Story"
  },*/
  /*{
    id: 7,
    src: "logo.jpeg",
    title: "Sample Title",
    story: "Sample Story"
  }*/
];

document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("galleryGrid");
  const modal = document.getElementById("imageModal");
  const closeModal = document.getElementById("closeModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalStory = document.getElementById("modalStory");
  const flipCard = document.querySelector(".flip-card");
  const turnBtn = document.getElementById("turnBtn");

  // Populate gallery
  galleryData.forEach(item => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy" />
      <div class="gallery-item-overlay">
        <h3>${item.title}</h3>
      </div>
    `;

    // Click event to open modal
    div.addEventListener("click", () => {
      openModal(item);
    });

    galleryGrid.appendChild(div);
  });

  function openModal(item) {
    modalImg.src = item.src;
    modalTitle.textContent = item.title;
    modalStory.textContent = item.story;

    // Ensure the card starts on the front side
    flipCard.classList.remove("flipped");
    turnBtn.textContent = "Read Story";

    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function close() {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  // Close button event
  closeModal.addEventListener("click", close);

  // Close when clicking outside the modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      close();
    }
  });

  // Flip card event
  turnBtn.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
    if (flipCard.classList.contains("flipped")) {
      turnBtn.textContent = "View Image";
    } else {
      turnBtn.textContent = "Read Story";
    }
  });

  // Keyboard support for closing modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      close();
    }
  });
});
