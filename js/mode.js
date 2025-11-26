/* ==========================================================
   MODE SYSTEM (Calm / Cinematic / Extreme / Minimal)
   Handles:
   - User mode selection from dropdown
   - Saving preference across all pages
   - Applying intensity changes to animations
   ========================================================== */

const modeSelect = document.getElementById("modeSelect");
const body = document.body;

// Load previously saved mode OR default to cinematic
const savedMode = localStorage.getItem("preferredMode") || "cinematic";
applyMode(savedMode);

// Ensure dropdown reflects saved mode
if (modeSelect) {
    modeSelect.value = savedMode;

    // When user changes mode
    modeSelect.addEventListener("change", () => {
        const mode = modeSelect.value;
        applyMode(mode);
        localStorage.setItem("preferredMode", mode);

        showStoryMessage(`Mode changed to: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
    });
}

/* ==========================================================
   APPLY MODE FUNCTION
   ========================================================== */
function applyMode(mode) {
    body.classList.remove("mode-calm", "mode-extreme", "mode-cinematic", "mode-minimal");
    body.classList.add(`mode-${mode}`);
}
