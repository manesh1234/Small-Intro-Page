if (!name) {
    var name = prompt("Please Enter Your Name ");
    localStorage.setItem('name', name);
}
document.querySelector('#uName').innerHTML = localStorage.getItem('name');
document.querySelector('#hName').innerHTML = localStorage.getItem('name');
var showMenu = (toggleId, navId) => {
    var toggle = document.getElementById(toggleId);
    var nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('menu-toggle', 'nav-menu');