function about() {
    document.getElementById('section-home').style.display="none";
    document.getElementById('section-about').style.display="block";
    document.getElementById('section-skills').style.display="none";
}
function home() {
    document.getElementById('section-home').style.display="block";
    document.getElementById('section-about').style.display="none";
    document.getElementById('section-skills').style.display="none";
}
function skills() {
    document.getElementById('section-skills').style.display="block";
    document.getElementById('section-home').style.display="none";
    document.getElementById('section-about').style.display="none";
}
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });