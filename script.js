(function () {
  const routes = ["dashboard", "policies", "policy-form", "policy-deployment", "policy-deployment-form", "placeholder"];
  const views = document.querySelectorAll(".view");
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const routeButtons = document.querySelectorAll("[data-route]");
  const createPolicyButton = document.getElementById("create-policy-button");
  const deployPolicyButton = document.getElementById("deploy-policy-button");

  function getRoute() {
    const hash = window.location.hash.replace("#", "");
    return routes.includes(hash) ? hash : "dashboard";
  }

  function setActiveRoute() {
    const route = getRoute();

    views.forEach((view) => {
      const isActive = view.id === route;
      view.hidden = !isActive;
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute("href").replace("#", "");
      const isActive = target === route;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function navigate(route) {
    window.location.hash = route;
  }

  routeButtons.forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });

  if (createPolicyButton) {
    createPolicyButton.addEventListener("click", () => navigate("policy-form"));
  }

  if (deployPolicyButton) {
    deployPolicyButton.addEventListener("click", () => navigate("policy-deployment-form"));
  }

  window.addEventListener("hashchange", setActiveRoute);

  if (!window.location.hash) {
    navigate("dashboard");
  } else {
    setActiveRoute();
  }
})();
