const navbar = document.querySelector('#navbarNav')

function hide(){
    if(navbar.classList.contains('show'))
    {
        navbar.classList.remove('show')
    }
}

navbar.addEventListener('click', hide)

