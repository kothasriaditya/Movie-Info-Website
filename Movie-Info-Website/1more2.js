// animate text over image
const overlays = document.querySelectorAll('.overlay');

overlays.forEach((overlay) => {
  const title = overlay.querySelector('h2');
  const desc = overlay.querySelector('p');
  const btn = overlay.querySelector('.btn');

  overlay.addEventListener('mouseover', () => {
    title.style.transform = 'translateY(0)';
    desc.style.transform = 'translateY(0)';
    btn.style.transform = 'translateY(0)';
  });

  overlay.addEventListener('mouseout', () => {
    title.style.transform = 'translateY(100%)';
    desc.style.transform = 'translateY(100%)';
    btn.style.transform = 'translateY(100%)';
  });
});
