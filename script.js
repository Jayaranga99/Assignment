let search = document.querySelector('.search-box')

document.querySelector('#search').onclick = ()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#Menu-icon').onclick = ()=>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}