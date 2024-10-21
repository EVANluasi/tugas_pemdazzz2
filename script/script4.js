function createParallaxText(text, baseVelocity) {
  const container = document.createElement('div');
  container.className = 'parallax overflow-hidden whitespace-nowrap w-full py-4 bg-blue-100 shadow-lg';

  const scroller = document.createElement('div');
  scroller.className = 'scroller flex';

  for (let i = 0; i < 6; i++) {
    const span = document.createElement('span');
    span.className = 'mr-4 text-gray-900 text-2xl font-bold';
    span.innerText = text;
    scroller.appendChild(span);
  }

  container.appendChild(scroller);
  document.getElementById('marquee-container').appendChild(container);

  let position = 0;
  let scrollDirection = 1;
  let targetPosition = 0;
  let lastScrollY = window.scrollY;
  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function getScrollVelocity() {
    return window.scrollY || 0;
  }

  function animate() {
    const currentScrollY = window.scrollY;
    const scrollVelocity = (currentScrollY - lastScrollY) / 1000; 
    lastScrollY = currentScrollY;

    scrollDirection = scrollVelocity > 0 ? 1 : -1;

    targetPosition += scrollDirection * baseVelocity * (1 + Math.abs(scrollVelocity));

    position = lerp(position, targetPosition, 0.1); 

    if (position <= -scroller.offsetWidth) {
      position = container.offsetWidth;
      targetPosition = position;
    } else if (position >= container.offsetWidth) {
      position = -scroller.offsetWidth;
      targetPosition = position;
    }

    scroller.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
  }

  animate(); 
}

document.addEventListener('DOMContentLoaded', () => {
  createParallaxText('Mohon jangan diganggu !!!', -4); 
  createParallaxText('Halo semuanya. Ini dibuat menggunakan CSS dan Tailwind yang letaknya inline', 4); 
});