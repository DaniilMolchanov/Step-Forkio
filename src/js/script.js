const headerBurger = document.querySelector('.navbar-burger');
const headerList = document.querySelector('.navbar-link')
headerBurger.addEventListener('click', function(){
    this.classList.toggle('active')
    headerList.classList.toggle('active')
})
