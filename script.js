document.addEventListener('DOMContentLoaded', () => {
  // 1. mobile navigation toggle logic
  const toggleNavBtn = document.getElementById('toggle-nav-btn');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');

  if (toggleNavBtn && mobileNavMenu) {
    toggleNavBtn.addEventListener('click', () => {
      // Toggle the display of the mobile navigation menu
      const isHidden =
        mobileNavMenu.style.display === 'none' ||
        mobileNavMenu.style.display === '';
      mobileNavMenu.style.display = isHidden ? 'flex' : 'none';

      // Change button text for better UX
      toggleNavBtn.textContent = isHidden ? '✖' : '☰';
    });

    // Close the mobile menu when a link is clicked
    const mobileLinks = mobileNavMenu.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNavMenu.style.display = 'none';
        toggleNavBtn.textContent = '☰';
      });
    });
  }

  // Add Simple Dynamic Text Effect
  const taglineElement = document.getElementById('tagline-text');
  const taglines = [
    'A Passionate Web Developer.',
    'Focused on Fullstack Development.',
    'Building Projects with Code, Music and Passion.',
    'A Creative Problem Solver.',
  ];
  let taglineIndex = 0;

  if (taglineElement) {
    setInterval(() => {
      // Cycle through the taglines every 4 seconds
      taglineIndex = (taglineIndex + 1) % taglines.length;
      taglineElement.textContent = taglines[taglineIndex];
    }, 4000);
  }
});
