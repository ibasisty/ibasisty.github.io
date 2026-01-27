    const slices = document.querySelectorAll('.slice');
    const legendItems = document.querySelectorAll('.legend-item');

    function highlight(id, active) {
      document.querySelector(`.slice[data-id="${id}"]`).style.filter = active
        ? 'brightness(0.8)'
        : 'brightness(1)';
    }

    slices.forEach(slice => {
      slice.addEventListener('mouseenter', () => {
        const id = slice.dataset.id;
        highlight(id, true);
      });

      slice.addEventListener('mouseleave', () => {
        const id = slice.dataset.id;
        highlight(id, false);
      });
    });

    legendItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const id = item.dataset.id;
        highlight(id, true);
      });

      item.addEventListener('mouseleave', () => {
        const id = item.dataset.id;
        highlight(id, false);
      });
    });