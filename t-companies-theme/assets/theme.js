/* Progressive enhancement: shopping forms and navigation also work without JavaScript. */
(() => {
  const initialize = (root = document) => {
    root.querySelectorAll('[data-scroll-target]').forEach((button) => {
      if (button.dataset.bound) return;
      button.dataset.bound = 'true';
      button.addEventListener('click', () => {
        const target = document.getElementById(button.dataset.scrollTarget);
        if (target) target.scrollBy({left: target.clientWidth * Number(button.dataset.scrollDirection || 1), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
      });
    });
    root.querySelectorAll('[data-product-section]').forEach((section) => {
      if (section.dataset.bound) return;
      section.dataset.bound = 'true';
      const select = section.querySelector('[data-variant-select]');
      const image = section.querySelector('.product-main-image__img');
      const setImage = (src, alt) => {
        if (!image || !src) return;
        image.removeAttribute('srcset');
        image.src = src;
        image.alt = alt || '';
        section.querySelectorAll('[data-product-thumbnail]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.src === src)));
      };
      section.querySelectorAll('[data-product-thumbnail]').forEach((button) => button.addEventListener('click', () => setImage(button.dataset.src, button.dataset.alt)));
      if (select) select.addEventListener('change', () => {
        const variant = select.selectedOptions[0];
        if (!variant) return;
        section.querySelector('[data-product-price]').textContent = variant.dataset.price;
        const compare = section.querySelector('[data-product-compare]');
        compare.textContent = variant.dataset.compare || '';
        compare.hidden = !variant.dataset.compare;
        const submit = section.querySelector('[data-add-to-cart]');
        submit.disabled = variant.dataset.available !== 'true';
        submit.textContent = submit.disabled ? 'Sold out' : 'Add to bag';
        setImage(variant.dataset.image, variant.dataset.alt);
        const quantity = section.querySelector('input[name="quantity"]');
        if (quantity) {
          quantity.min = variant.dataset.min || '1';
          quantity.step = variant.dataset.step || '1';
          if (variant.dataset.max) quantity.max = variant.dataset.max;
          else quantity.removeAttribute('max');
          quantity.value = quantity.min;
        }
        const url = new URL(window.location.href);
        url.searchParams.set('variant', variant.value);
        window.history.replaceState({}, '', url);
      });
    });
    root.querySelectorAll('.filter-drawer').forEach((details) => {
      if (details.dataset.bound) return;
      details.dataset.bound = 'true';
      if (window.matchMedia('(max-width: 749px)').matches) details.open = false;
    });
  };
  const closeMenus = (event) => {
    document.querySelectorAll('.nav-dropdown[open], .mobile-menu[open]').forEach((details) => {
      if (event.type === 'keydown') {
        details.open = false;
        const summary = details.querySelector('summary');
        if (summary) summary.focus();
      } else if (!details.contains(event.target)) details.open = false;
    });
  };
  document.addEventListener('click', closeMenus);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenus(event); });
  document.addEventListener('shopify:section:load', (event) => initialize(event.target));
  initialize();
})();
