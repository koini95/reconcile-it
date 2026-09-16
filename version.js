(() => {
  const VERSION = 'v0.1.3'; // visible build marker
  const mount = () => {
    if (document.getElementById('reconcile-version')) return;
    const badge = document.createElement('span');
    badge.id = 'reconcile-version';
    badge.textContent = VERSION;
    badge.style.cssText = 'display:inline-block;margin-left:8px;padding:3px 7px;border-radius:999px;background:#efefeb;color:#777;font:600 11px/1.2 system-ui,sans-serif;vertical-align:middle';
    const title = document.querySelector('h1');
    if (title) title.appendChild(badge);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
