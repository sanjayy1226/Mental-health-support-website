document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Toggle visibility
    const isVisible = content.style.maxHeight && content.style.maxHeight !== '0px';
    content.style.maxHeight = isVisible ? '0px' : `${content.scrollHeight}px`;

    // Collapse other accordion items
    document.querySelectorAll('.accordion-content').forEach((otherContent) => {
      if (otherContent !== content) {
        otherContent.style.maxHeight = '0px';
      }
    });
  });
});
