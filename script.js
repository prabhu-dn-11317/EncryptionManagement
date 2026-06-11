(function () {
  const defaultRoute = "dashboard";
  const routeToView = {
    dashboard: "dashboard",
    policies: "policies",
    "policy-form": "policy-form",
    "policy-deployment": "placeholder",
    "managed-computers": "placeholder",
    "encryption-prerequisites": "placeholder",
    "reports-bitlocker": "placeholder",
    "reports-tpm": "placeholder",
    "recovery-key": "placeholder",
    placeholder: "placeholder"
  };

  const views = document.querySelectorAll(".view");
  const sidebarLinks = document.querySelectorAll(".sidebar .sidebar-link");
  const routeButtons = document.querySelectorAll("[data-route]");
  const createPolicyButton = document.getElementById("create-policy-button");
  const mainContent = document.querySelector(".main-content");

  function getRouteFromHash() {
    const hash = window.location.hash.replace("#", "").trim();
    return Object.prototype.hasOwnProperty.call(routeToView, hash) ? hash : defaultRoute;
  }

  function setActiveRoute() {
    const route = getRouteFromHash();
    const activeView = routeToView[route];
    const activeSidebarRoute = route === "policy-form" ? "policies" : route;

    views.forEach((view) => {
      const isActive = view.id === activeView;
      view.hidden = !isActive;
      view.classList.toggle("is-active", isActive);
    });

    sidebarLinks.forEach((link) => {
      const target = link.getAttribute("href").replace("#", "");
      const isActive = target === activeSidebarRoute;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (mainContent) {
      mainContent.scrollTo(0, 0);
    }
  }

  function navigate(route) {
    const nextRoute = Object.prototype.hasOwnProperty.call(routeToView, route) ? route : defaultRoute;
    if (window.location.hash === `#${nextRoute}`) {
      setActiveRoute();
      return;
    }
    window.location.hash = nextRoute;
  }

  routeButtons.forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });

  if (createPolicyButton) {
    createPolicyButton.addEventListener("click", () => navigate("policy-form"));
  }

  window.addEventListener("hashchange", setActiveRoute);

  const initialRoute = getRouteFromHash();
  if (window.location.hash.replace("#", "") !== initialRoute) {
    window.location.hash = initialRoute;
  } else {
    setActiveRoute();
  }
})();
