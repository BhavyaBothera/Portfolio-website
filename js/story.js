/* ==========================================================
   STORY SYSTEM (Narrative Message Engine)
   Handles:
   - Showing small cinematic messages on screen
   - Auto fading them out after a delay
   - Used during warp & era page arrival
   ========================================================== */

function showStoryMessage(message, duration = 2000) {
    const box = document.querySelector(".story-overlay");
    if (!box) return; // Safety check

    // Set message text
    box.textContent = message;

    // Show it with animation
    box.classList.add("story-visible");

    // Hide after chosen delay
    setTimeout(() => {
        box.classList.remove("story-visible");
    }, duration);
}
