document.addEventListener('DOMContentLoaded',()=>{

    const h1 = document.querySelector('section.welcome h1');
    const sect_h1 = document.querySelector('section.welcome');
    const main = document.querySelector('section.main');

    var timeout = null;

    sect_h1.ontransitionend = () => {
        if(h1.className.includes('show') && !sect_h1.classList.contains('hide')) return;
        sect_h1.style.display = 'none';
        main.style.display = "block";
        setTimeout(()=>{
            main.classList.add('show');
            document.querySelector('html').style.overflow = "unset";
        },500);
    };

    h1.ontransitionend = (ev) => {
        if(h1.className.includes('show'))
        {
            setTimeout(()=>{
                sect_h1.classList.add('hide');
            },1000);
        }
    };

    h1.classList.add('show');

});

function isNotVisible(elem)
{
    elem = document.querySelector(elem);
    let distance = elem.getBoundingClientRect();

    let goUpButton = document.querySelector('.go-up-container');

    if( distance.bottom < (window.innerHeight / 2 || document.documentElement.clientHeight / 2) )
    {
        if(goUpButton.classList.contains('hide'))
            goUpButton.classList.remove('hide');
    }else
    {
        goUpButton.classList.add('hide');
    }
}

window.onscroll = () => isNotVisible(".title-container");