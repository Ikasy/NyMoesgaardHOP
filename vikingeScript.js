// Gemmer historikken af overlays
const overlayHistory = [];
const boxcontainer = document.querySelector(".boxcontainer");
// Funktion til at åbne et specifikt overlay
function openOverlay(overlayId) {
    // Hvis der allerede er et åbent overlay, gemmes det i historikken
    const openOverlay = document.querySelector('.overlay[style*="display: flex"]');
    console.log(boxcontainer.style.display)
    if (openOverlay) {
        overlayHistory.push(openOverlay.id);
    }

    // Lukker alle overlays
    closeOverlay();

    // Skjuler baggrunden
    boxcontainer.style.display = "none";

    // Finder og viser det ønskede overlay
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.style.display = 'flex';
    }
}

// Funktion til at lukke alle overlays
function closeOverlay() {
    const overlays = document.querySelectorAll('.overlay');

    // viser baggrunden
    boxcontainer.style.display = "flex";

    overlays.forEach(overlay => {
        overlay.style.display = 'none';
    });
}

// Funktion til at gå til tidligere overlay
function goBack() {
    // Hent det sidste overlay fra historikken
    const previousOverlayId = overlayHistory.pop();
    if (previousOverlayId) {
        closeOverlay();  // Lukker nuværende overlay
        openOverlay(previousOverlayId);  // Åbner tidligere overlay
    }
}