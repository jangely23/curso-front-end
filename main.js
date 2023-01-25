const menu_email = document.querySelector('.navbar-email');
const menu_mobile = document.querySelector('.mobile-menu-icon');

menu_email.addEventListener("click",  function(){toggleElement(".desktop-menu")});
menu_mobile.addEventListener("click",  function(){toggleElement(".mobile-menu")});


function toggleElement(element){
    const  elemente_modify = document.querySelector(element);
    elemente_modify.classList.toggle('inactive');
}

