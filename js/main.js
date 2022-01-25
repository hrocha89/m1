const elementAno = document.getElementById('ano');
elementAno.innerHTML = new Date().getFullYear().toString();

const menuItens = document.querySelectorAll('.nav-item a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', (event) => {

        event.preventDefault();

        const element = event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;

        window.scroll({
            top: to - 100,
            behavior: "smooth"
        });
    })
});
