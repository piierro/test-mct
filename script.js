document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Форма отправлена!");
        form.reset();
    });
});


document.querySelectorAll('.fact').forEach(fact => {
    fact.addEventListener('click', () => {
        fact.querySelector('.fact-info').classList.toggle('visible')
    })
})

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');

  burgerMenu.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});

document.addEventListener('click', function (event) {
  const nav = document.querySelector('.nav');
  const burgerMenu = document.querySelector('.burger-menu');

  if (!nav.contains(event.target) && !burgerMenu.contains(event.target)) {
    nav.classList.remove('active');
  }
});