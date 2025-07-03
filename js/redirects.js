(function () {
  // Normalize current path: lowercase and remove trailing slash
  let currentPath = window.location.pathname.toLowerCase().replace(/\/$/, "");

  // Treat root as /home
  if (currentPath === "") currentPath = "/home/";

  // Valid paths without trailing slash
  const validPaths = [
    "/",
    "/home/",
    "/about/",
    "/services/",
    "/our-product/",
    "/team/",
    "/blog/",
    "/download/",
    "/career/",
    "/gallery/",
    "/news-&-updates/",
    "/contact/",
  ];

  if (!validPaths.includes(currentPath)) {
    window.location.href = "/404/";
  }
})();
