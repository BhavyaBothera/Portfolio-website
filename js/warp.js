/* ==========================================================
   WARP TRANSITION LOGIC
   Handles:
   - Intercepting era clicks
   - Showing correct story message
   - Playing vortex warp animation
   - Delayed navigation into selected era page
   ========================================================== */

document.querySelectorAll(".era-card").forEach(card => {

    card.addEventListener("click", (event) => {
        event.preventDefault();   // Stop instant navigation

        const targetURL = card.getAttribute("href");
        const overlay = document.querySelector("#warp-overlay");

        // Identify the era clicked and show the correct narrative message
        if (card.classList.contains("stone-card")) {
            showStoryMessage("Reconstructing Primitive Landscape...");
        }
        else if (card.classList.contains("medieval-card")) {
            showStoryMessage("Opening Royal Manuscript...");
        }
        else if (card.classList.contains("retro-card")) {
            showStoryMessage("Booting Neon Synthwave Timeline...");
        }
        else if (card.classList.contains("modern-card")) {
            showStoryMessage("Loading Modern Minimal Framework...");
        }
        else if (card.classList.contains("future-card")) {
            showStoryMessage("Initializing Quantum Hologram Systems...");
        }

        // Activate the vortex warp
        overlay.classList.add("warp-active");

        // Delay navigation until warp animation completes
        setTimeout(() => {
            window.location.href = targetURL;
        }, 1100);   // smooth & synced with CSS animation
    });

});
