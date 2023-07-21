//......................................................
//                             BARNAV
// .....................................................

//Set Color barNav and swith bar and X mark in mobile size*******************************************
function myFunction() {
    var barnav = document.getElementById('navBar'); 
  
    barnav.classList.toggle('show');   
    document.getElementById("xmark").classList.toggle("switchOn");
    document.getElementById("bars").classList.toggle("switchOff");  
    document.getElementById("barMenu").classList.toggle("menuMobileStyle");
  }

//......................................................
//                     CONTACT BTN
// .....................................................
function hrefFunction(){
  location.href = "pages/contacto.html";
};
