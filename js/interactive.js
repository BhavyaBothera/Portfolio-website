/* ==========================================================
   INTERACTIVE CARD ENGINE
   Handles:
   - Auto-injecting ripple layers into every .card
   - Mouse-following ripple movement
   - Re-triggering animation for smooth repeated ripples
   ========================================================== */

document.querySelectorAll(".card").forEach((card) => {

    /* ------------------------------------------------------
       1. Create and append ripple layer to each card
       ------------------------------------------------------ */
    const ripple = document.createElement("div");
    ripple.classList.add("card-ripple");
    card.appendChild(ripple);

    /* ------------------------------------------------------
       2. Mouse movement inside card triggers ripple effect
       ------------------------------------------------------ */
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        // Get cursor position relative to card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Position ripple
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Restart animation (CSS trick)
        ripple.classList.remove("active");
        void ripple.offsetWidth; // force reflow
        ripple.classList.add("active");
    });
});
