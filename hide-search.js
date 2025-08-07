function hideSearchIconAndBlockKeys() {
  const app = document.querySelector("home-assistant");
  if (!app || !app.hass || !app.hass.user) return;

  const isAdmin = app.hass.user.is_admin;
  if (isAdmin) return; // Only act for non-admins

  try {
    const main = app.shadowRoot.querySelector("home-assistant-main");
    const panel = main.shadowRoot.querySelector("ha-panel-lovelace");
    const root = panel.shadowRoot.querySelector("hui-root");
    const header = root.shadowRoot.querySelector(".header");
    const iconButtons = header.querySelectorAll("ha-icon-button");

    iconButtons.forEach((btn) => {
      const svg = btn.shadowRoot?.querySelector("ha-svg-icon");
      const path = svg?.shadowRoot?.querySelector("path");
      if (path && path.getAttribute("d")?.startsWith("M9.5,3A6.5")) {
        btn.style.display = "none";
        btn.disabled = true;
        btn.setAttribute("aria-hidden", "true");
        console.log("Search icon hidden for non-admin.");
      }
    });

    // Block keys e and d
    document.addEventListener(
      "keydown",
      (event) => {
        const blocked = ["e", "d"];
        if (
          blocked.includes(event.key.toLowerCase()) &&
          !event.ctrlKey &&
          !event.metaKey
        ) {
          event.preventDefault();
          event.stopPropagation();
          console.warn(`Blocked key: ${event.key}`);
        }
      },
      true
    );
  } catch (err) {
    console.warn("Error hiding search icon:", err);
  }
}

hideSearchIconAndBlockKeys();
