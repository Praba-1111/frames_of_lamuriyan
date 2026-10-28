/* ==========================================================================
   frames_of_lamuriyan — Editorial Portfolio Scripts
   ==========================================================================
   
   📸 HOW TO ADD NEW PHOTOS & STORIES:
   --------------------------------------------------------------------------
   To add a new photograph and its story to your website, simply COPY and PASTE
   the template below into the `photographyData` list below:

   {
     id: 10,                                                // Unique number (10, 11, 12...)
     src: "photohraphs/your_image.jpeg",                    // Image path in photohraphs folder
     title: "Eyes of Kathakali",                            // Title of the photo
     bracket: "[ Kerala • Traditional Art ]",                // Tag in brackets [ Location • Theme ]
     quote: "Tradition, emotion, and art came together in one powerful look.", // Highlight quote / tagline
     story: "The bold colours and dramatic makeup of Kathakali immediately drew my attention..." // Full story text
   },

   ========================================================================== */

(function () {
  "use strict";

  /* ==========================================================================
     PHOTO & STORY DATA
     Add, edit, or remove your photos and stories right here:
     ========================================================================== */
  const photographyData = [
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

  let currentPhotoIndex = 0;

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initStoryModal();
    initFeaturedCarousel();
    initCounterAnimation();
    initNavScrollSpy();
  });

  /* --------------------------------------------------------------------------
     1. Mobile Menu Drawer
     -------------------------------------------------------------------------- */
  function initMobileMenu() {
    const btn = document.getElementById("mobileMenuBtn");
    const drawer = document.getElementById("mobileDrawer");
    if (!btn || !drawer) return;

    function toggleMenu(open) {
      const isOpen = typeof open === "boolean" ? open : !drawer.classList.contains("is-open");
      btn.classList.toggle("is-active", isOpen);
      drawer.classList.toggle("is-open", isOpen);
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      drawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    btn.addEventListener("click", function () {
      toggleMenu();
    });

    drawer.querySelectorAll(".mobile-link").forEach(function (link) {
      link.addEventListener("click", function () {
        toggleMenu(false);
      });
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) {
        toggleMenu(false);
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Interactive Story Modal (Flip Card with Custom Story Quotes)
     -------------------------------------------------------------------------- */
  function initStoryModal() {
    const modal = document.getElementById("storyModal");
    const backdrop = document.getElementById("modalBackdrop");
    const closeBtn = document.getElementById("modalCloseBtn");
    const flipper = document.getElementById("modalCardFlipper");
    const flipBtn = document.getElementById("modalFlipBtn");
    const prevBtn = document.getElementById("modalPrevBtn");
    const nextBtn = document.getElementById("modalNextBtn");

    const modalImage = document.getElementById("modalImage");
    const modalBracket = document.getElementById("modalBracket");
    const modalFrontTitle = document.getElementById("modalFrontTitle");
    const modalBackBracket = document.getElementById("modalBackBracket");
    const modalStoryTitle = document.getElementById("modalStoryTitle");
    const modalStoryText = document.getElementById("modalStoryText");
    const modalStoryQuote = document.querySelector(".modal-story-quote blockquote");

    if (!modal) return;

    function renderModalItem(index) {
      if (index < 0) index = photographyData.length - 1;
      if (index >= photographyData.length) index = 0;
      currentPhotoIndex = index;

      const item = photographyData[currentPhotoIndex];
      modalImage.src = item.src;
      modalImage.alt = item.title;
      modalBracket.textContent = item.bracket || "[ Story Frame ]";
      modalFrontTitle.textContent = item.title;

      modalBackBracket.textContent = item.bracket || "[ Story Background ]";
      modalStoryTitle.textContent = item.title;
      modalStoryText.textContent = item.story;

      if (modalStoryQuote) {
        modalStoryQuote.textContent = item.quote ? `"${item.quote}"` : `"Every destination has a story, every person carries a unique journey."`;
      }

      // Always reset to front side when switching items
      flipper.classList.remove("is-flipped");
      flipBtn.textContent = "Read Story";
    }

    function openModalWithId(id) {
      const idx = photographyData.findIndex(function (item) {
        return item.id === parseInt(id, 10);
      });
      renderModalItem(idx !== -1 ? idx : 0);
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      setTimeout(function () {
        flipper.classList.remove("is-flipped");
      }, 300);
    }

    // Attach click triggers to all editorial cards
    document.querySelectorAll(".editorial-card").forEach(function (card) {
      card.addEventListener("click", function () {
        const id = card.getAttribute("data-id");
        openModalWithId(id);
      });
    });

    // Attach click triggers to featured slides
    document.querySelectorAll(".slide-read-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        openModalWithId(id);
      });
    });

    document.querySelectorAll(".featured-slide").forEach(function (slide) {
      slide.addEventListener("click", function () {
        const id = slide.getAttribute("data-id");
        openModalWithId(id);
      });
    });

    // Flip action
    flipBtn.addEventListener("click", function () {
      flipper.classList.toggle("is-flipped");
      const isFlipped = flipper.classList.contains("is-flipped");
      flipBtn.textContent = isFlipped ? "View Image" : "Read Story";
    });

    // Arrow navigation
    prevBtn.addEventListener("click", function () {
      renderModalItem(currentPhotoIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
      renderModalItem(currentPhotoIndex + 1);
    });

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);

    // Keyboard navigation
    window.addEventListener("keydown", function (e) {
      if (!modal.classList.contains("is-open")) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") renderModalItem(currentPhotoIndex - 1);
      if (e.key === "ArrowRight") renderModalItem(currentPhotoIndex + 1);
    });
  }

  /* --------------------------------------------------------------------------
     3. Featured Project Carousel
     -------------------------------------------------------------------------- */
  function initFeaturedCarousel() {
    const track = document.getElementById("featuredCarousel");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");
    if (!track || !prevBtn || !nextBtn) return;

    prevBtn.addEventListener("click", function () {
      const card = track.querySelector(".featured-slide");
      const cardWidth = card ? card.offsetWidth + 28 : 340;
      track.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
      const card = track.querySelector(".featured-slide");
      const cardWidth = card ? card.offsetWidth + 28 : 340;
      track.scrollBy({ left: cardWidth, behavior: "smooth" });
    });
  }

  /* --------------------------------------------------------------------------
     4. Animated Number Counter (5+ Years)
     -------------------------------------------------------------------------- */
  function initCounterAnimation() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"), 10);
          animateCount(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) {
      observer.observe(c);
    });

    function animateCount(el, target) {
      let current = 0;
      const duration = 1200;
      const stepTime = 50;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;

      const timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.ceil(current);
        }
      }, stepTime);
    }
  }

  /* --------------------------------------------------------------------------
     5. Nav Active Link Scroll Spy
     -------------------------------------------------------------------------- */
  function initNavScrollSpy() {
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".desktop-nav .nav-link");
    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", function () {
      let currentId = "";
      const scrollPos = window.scrollY + 120;

      sections.forEach(function (sec) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = sec.getAttribute("id");
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentId) {
          link.classList.add("active");
        }
      });
    }, { passive: true });
  }

})();
