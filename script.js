(function () {
  "use strict";

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxStage = document.getElementById("lightbox-stage");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  const plates = Array.from(document.querySelectorAll(".plate-img"));
  const enlargeBtns = Array.from(document.querySelectorAll(".enlarge-btn"));

  if (!lightbox || !lightboxImg || plates.length === 0) return;

  let currentIndex = 0;
  let lastTrigger = null;

  function renderPlate(index) {
    const total = plates.length;
    currentIndex = (index + total) % total;
    const activePlate = plates[currentIndex];

    lightboxImg.src = activePlate.currentSrc || activePlate.src;
    lightboxImg.alt = activePlate.alt;
    lightboxCaption.textContent = `PLATE 0${currentIndex + 1} / 0${total}`;
  }

  function openLightbox(index, triggerEl) {
    lastTrigger = triggerEl || document.activeElement;
    renderPlate(index);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    lightboxImg.src = "";
    if (lastTrigger && typeof lastTrigger.focus === "function") {
      lastTrigger.focus();
    }
  }

  plates.forEach((img, idx) => {
    img.addEventListener("click", () => openLightbox(idx, img));
  });

  enlargeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-index")) || 0;
      openLightbox(idx, btn);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => renderPlate(currentIndex - 1));
  nextBtn.addEventListener("click", () => renderPlate(currentIndex + 1));

  lightboxStage.addEventListener("click", (event) => {
    if (event.target === lightboxStage) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      renderPlate(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      renderPlate(currentIndex + 1);
    }
  });
})();
