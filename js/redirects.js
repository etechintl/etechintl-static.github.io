(function () {
  // Normalize current path: lowercase and remove trailing slash
  let currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '');

  // Treat root as /home
  if (currentPath === '') currentPath = '/home';

  // Valid paths without trailing slash
  const validPaths = [
    '/home',
    '/about',
    '/services',
    '/team',
    '/testimonials',
    '/404',
    '/contact',
  ];

  if (!validPaths.includes(currentPath)) {
    window.location.href = '/404/';
  }
})();
