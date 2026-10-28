/* ==========================================================================
   frames_of_lamuriyan — Gallery Archive Scripts
   ==========================================================================
   
   📸 HOW TO ADD NEW PHOTOS & STORIES:
   --------------------------------------------------------------------------
   To add a new photograph and story to your gallery, simply COPY and PASTE
   the template below into the `galleryData` list:

   {
     id: 10,                                                // Unique number (10, 11, 12...)
     src: "photohraphs/your_image.jpeg",                    // Image path in photohraphs folder
     title: "Eyes of Kathakali",                            // Title of the photo
     bracket: "[ Kerala • Traditional Art ]",                // Tag in brackets [ Location • Theme ]
     quote: "Tradition, emotion, and art came together in one powerful look.", // Highlight quote / tagline
     story: "The bold colours and dramatic makeup of Kathakali immediately drew my attention..." // Full story text
   },

   ========================================================================== */

const galleryData = [
  {
    id: 1,
    src: "photohraphs/Kathakali.jpeg",
    title: "Eyes of Kathakali",
    bracket: "[ Kerala • Traditional Art ]",
    quote: "Tradition, emotion, and art came together in one powerful look.",
    story: "The bold colours and dramatic makeup of Kathakali immediately drew my attention, but it was the eyes that truly held my frame. The intense expression seemed to tell a story without a single word. I captured that fleeting moment where tradition, emotion, and art came together in one powerful look."
  },
  {
    id: 2,
    src: "photohraphs/Mohiniyattam.jpeg",
    title: "Mohiniyattam",
    bracket: "[ Kerala • Classical Dance ]",
    quote: "Every destination has a story, every person carries a unique journey.",
    story: "The gentle movements of Mohiniyattam caught my eye, especially the elegance in the dancer’s posture and expression. The flowing costume and subtle movement created a sense of calm and beauty within the frame. I captured this moment to preserve the quiet grace that made the performance so captivating."
  },
  {
    id: 3,
    src: "photohraphs/bird_eye_Cbe.jpeg",
    title: "A Fierce Gaze",
    bracket: "[ Coimbatore • Wildlife ]",
    quote: "Even the smallest creatures carry a powerful presence in nature.",
    story: "The bird’s sharp eyes and intense expression caught my attention, revealing a fierce side of nature. In that single moment, its gaze seemed to speak louder than words, reminding me that even the smallest creatures carry a powerful presence."
  },
  {
    id: 4,
    src: "photohraphs/Stranger_Chennai.jpeg",
    title: "Between Trains and Dreams",
    bracket: "[ Chennai • Documentary ]",
    quote: "Behind every crowded station, there are unseen lives and quiet struggles.",
    story: "At a busy railway station in Chennai, I noticed a man quietly selling cotton candy and small toys to passing strangers. While people hurried toward their trains, he stood there waiting for someone to stop and buy. His simple work reminded me that behind every crowded station, there are unseen lives, quiet struggles, and dreams that keep moving forward."
  },
  {
    id: 5,
    src: "photohraphs/Fish_wild.jpeg",
    title: "After a Night of Rain",
    bracket: "[ Lakeside • Wildlife & Nature ]",
    quote: "Freshness of rain, morning light, and life in the lake come together naturally.",
    story: "After a full night of rain, the lake was wrapped in a soft mist as the first morning light appeared through the clouds. A fish quietly breaking the stillness of the water caught my attention and became the heart of the frame. It was a peaceful moment where the freshness of rain, morning light, and life in the lake came together naturally."
  },
  {
    id: 6,
    src: "photohraphs/Dog_Street.jpeg",
    title: "Light Finds Everyone",
    bracket: "[ Street • Monochromatic ]",
    quote: "Beauty can always be found in the quietest and most ordinary moments.",
    story: "A muddy dog sitting quietly caught my attention as the sunlight gently fell across its back. The contrast between its muddy body and the warm light created a simple yet striking frame. Sometimes, beauty can be found in the quietest and most ordinary moments."
  },
  {
    id: 7,
    src: "photohraphs/Anaikatti_Hill.jpeg",
    title: "Between Sun and Clouds",
    bracket: "[ Anaikatti Hills • Landscape ]",
    quote: "Changing light made the familiar hills feel calm, dramatic, and beautifully alive.",
    story: "The hills of Anaikatti looked different in the soft evening light, with the sun slowly moving behind the clouds. Around 4:30 PM, the gentle sunlight touched the hills while the clouds added depth and mood to the scene. I captured this moment where the changing light made the familiar hills feel calm, dramatic, and beautifully alive."
  },
  {
    id: 8,
    src: "photohraphs/Kerala_village_forest.jpeg",
    title: "Through Kerala’s Green Roads",
    bracket: "[ Kerala • Reserve Forest ]",
    quote: "The simple journey of everyday life meets the untouched beauty of the forest.",
    story: "While travelling through Kerala, I came across a quiet road surrounded by the deep green of the reserve forest. A local auto approaching through the trees added a sense of life and movement to the peaceful landscape. I captured this moment where the simple journey of everyday life met the untouched beauty of Kerala’s forests."
  },
  {
    id: 9,
    src: "photohraphs/Stranger_Anaikatti.jpeg",
    title: "A Quiet Moment",
    bracket: "[ Anaikatti • Portrait ]",
    quote: "The simplest faces and quiet moments tell the most honest stories.",
    story: "An old man sitting quietly on the ground caught my attention in the middle of an ordinary day. There was something peaceful in his stillness, as if he was lost in his own thoughts. I captured the moment because sometimes the simplest faces and quiet moments tell the most honest stories."
  }
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("galleryGrid");
  const modal = document.getElementById("imageModal");
  const closeModal = document.getElementById("closeModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalImg = document.getElementById("modalImg");
  const modalBracket = document.getElementById("modalBracket");
  const modalFrontTitle = document.getElementById("modalFrontTitle");
  const modalBackBracket = document.getElementById("modalBackBracket");
  const modalTitle = document.getElementById("modalTitle");
  const modalStory = document.getElementById("modalStory");
  const modalStoryQuote = document.querySelector(".modal-story-quote blockquote");
  const flipCard = document.getElementById("modalCardFlipper");
  const turnBtn = document.getElementById("turnBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Populate gallery with all photos
  galleryData.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.setAttribute("data-index", idx);

    const formattedNum = String(idx + 1).padStart(2, "0");

    card.innerHTML = `
      <div class="gallery-card-meta">
        <span class="meta-tag">${item.bracket}</span>
      </div>
      <div class="gallery-card-media">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-card-hover">
          <span class="hover-label">Read Story</span>
        </div>
      </div>
      <div class="gallery-card-caption">
        <h3 class="caption-title">${item.title}</h3>
        <span class="caption-number">${formattedNum}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      openModal(idx);
    });

    galleryGrid.appendChild(card);
  });

  function openModal(idx) {
    if (idx < 0) idx = galleryData.length - 1;
    if (idx >= galleryData.length) idx = 0;
    currentIndex = idx;

    const item = galleryData[currentIndex];
    modalImg.src = item.src;
    modalImg.alt = item.title;
    modalBracket.textContent = item.bracket || "[ Story Frame ]";
    modalFrontTitle.textContent = item.title;

    modalBackBracket.textContent = item.bracket || "[ Story Background ]";
    modalTitle.textContent = item.title;
    modalStory.textContent = item.story;

    if (modalStoryQuote) {
      modalStoryQuote.textContent = item.quote ? `"${item.quote}"` : `"Every destination has a story, every person carries a unique journey."`;
    }

    flipCard.classList.remove("flipped");
    turnBtn.textContent = "Read Story";

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      flipCard.classList.remove("flipped");
    }, 300);
  }

  closeModal.addEventListener("click", close);
  modalBackdrop.addEventListener("click", close);

  // Flip card
  turnBtn.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
    if (flipCard.classList.contains("flipped")) {
      turnBtn.textContent = "View Image";
    } else {
      turnBtn.textContent = "Read Story";
    }
  });

  // Next / Prev navigation
  prevBtn.addEventListener("click", () => {
    openModal(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    openModal(currentIndex + 1);
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("show")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") openModal(currentIndex - 1);
    if (e.key === "ArrowRight") openModal(currentIndex + 1);
  });
});
