function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active'); 
}

function hideMenu() {
    document.querySelector('.menu').classList.remove('active');
}


document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a[href^="#"]');

  function smoothCenterScroll(target) {
    const rect = target.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset;
    const offset = (window.innerHeight - rect.height) / 2;
    const top = Math.max(0, absoluteTop - offset);
    window.scrollTo({ top, behavior: 'smooth' });
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return; // pozwól normalnie działać pustym/#
      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();
      smoothCenterScroll(el);
    });
  });
});




window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollPercent < 95) {
            document.getElementById("scroll-progress").style.height = scrollPercent + "%";
        }else {
            document.getElementById("scroll-progress").style.height = "95%";
        }
    });