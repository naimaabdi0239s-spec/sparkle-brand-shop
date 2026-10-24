document.addEventListener('DOMContentLoaded', () => {
  const bagToggle = document.querySelector('.bag-button');
  const bagDrawer = document.getElementById('cart-drawer');
  const closeButton = document.querySelector('.cart-close');

  const openDrawer = () => {
    if (!bagDrawer) return;
    bagDrawer.hidden = false;
    bagDrawer.setAttribute('aria-hidden', 'false');
  };

  const closeDrawer = () => {
    if (!bagDrawer) return;
    bagDrawer.hidden = true;
    bagDrawer.setAttribute('aria-hidden', 'true');
  };

  bagToggle?.addEventListener('click', openDrawer);
  closeButton?.addEventListener('click', closeDrawer);

  const formatMoney = (cents) => {
    const dollars = cents / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(dollars);
  };

  const updateCartBadge = (cart) => {
    const bagCount = document.querySelector('.bag-count');
    if (bagCount) bagCount.textContent = String(cart.item_count || 0);
    const totalText = document.querySelector('.cart-row strong');
    if (totalText) totalText.textContent = formatMoney(cart.total_price || 0);
  };

  const loadCart = async () => {
    try {
      const response = await fetch('/cart.js');
      if (!response.ok) return;
      const cart = await response.json();
      updateCartBadge(cart);
    } catch (error) {
      console.warn('Unable to sync cart', error);
    }
  };

  const handleAddToCart = async (event) => {
    const form = event.target.closest('form[data-product-form]');
    if (!form) return;
    event.preventDefault();

    const formData = new FormData(form);
    const id = formData.get('id');
    const quantity = Number(formData.get('quantity') || 1);

    if (!id) return;

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify({ id: Number(id), quantity })
      });

      if (!response.ok) throw new Error('Add to cart failed');
      await loadCart();
      openDrawer();
    } catch (error) {
      console.error(error);
      alert('Unable to add item to bag. Please try again.');
    }
  };

  const handleCartChange = async (lineId, nextQuantity) => {
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ id: lineId, quantity: nextQuantity })
      });

      if (!response.ok) throw new Error('Cart update failed');
      await loadCart();
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('Unable to update bag. Please try again.');
    }
  };

  document.querySelectorAll('form[data-product-form]').forEach((form) => {
    form.addEventListener('submit', handleAddToCart);
  });

  document.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', async () => {
      const lineId = button.dataset.line;
      const action = button.dataset.action;
      if (!lineId) return;
      const currentValue = Number(button.closest('.bag-item')?.querySelector('.qty-value')?.textContent || 0);
      const nextQuantity = action === 'increase' ? currentValue + 1 : Math.max(0, currentValue - 1);
      if (nextQuantity <= 0) {
        await handleCartChange(lineId, 0);
        return;
      }
      await handleCartChange(lineId, nextQuantity);
    });
  });

  document.querySelectorAll('.remove-button').forEach((button) => {
    button.addEventListener('click', async () => {
      const lineId = button.dataset.line;
      if (!lineId) return;
      await handleCartChange(lineId, 0);
    });
  });

  document.querySelectorAll('.qty-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const parent = button.closest('.quantity');
      const input = parent?.querySelector('input[name="quantity"]');
      if (!input) return;
      const value = Number(input.value || 1);
      if (button.classList.contains('qty-minus')) {
        input.value = String(Math.max(1, value - 1));
      } else if (button.classList.contains('qty-plus')) {
        input.value = String(Math.min(99, value + 1));
      }
    });
  });

  loadCart();
});
