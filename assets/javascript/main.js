window.onload = function(){
  
  const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
   
	});

  navbar = document.querySelector(".lg-navbar").querySelectorAll(".lg-link");
console.log(navbar);

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

mobNavbar = document.querySelector(".mobile-nav").querySelectorAll(".mobile-link");
console.log(mobNavbar);

mobNavbar.forEach((element) => {
  element.addEventListener("click", function () {
  mobNavbar.forEach((nav) => nav.classList.remove("mob-active"));
    this.classList.add("mob-active");
  });
});



  
  // Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

var services = document.querySelector(".service-btn").querySelectorAll(".antik-service-btn");


// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
    
    services.forEach((element) => {
      element.addEventListener("click", function () {
        navbar.forEach((service) => service.classList.remove("be-active"));
        this.classList.add("be-active");
      });
    });
    
    
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
}


// let mobnav = document.querySelectorAll('.mobile-link'); 
// for (let p=0; p < mobnav.length; p++){
//   mobnav[p].addEventListener('click', function(){
//     for(let r=0; r<mobnav.length; r++){
//       mobnav[r].classList.remove('active');
//       mobnav[r].classList.add('active');
//     }
    
//   })
// }

let list = document.querySelectorAll('.antik-service-btn');
let itemBox = document.querySelectorAll('.itemBox');  

for(let j=0; j<list.length; j++){
  list[j].addEventListener('click', function(){
    for(let k=0; k<list.length; k++){
      list[k].classList.remove('is-active');
    }
    this.classList.add('is-active');

    let dataFilter = this.getAttribute('data-filter');
    for(let l=0; l<itemBox.length; l++){
      itemBox[l].classList.remove('is-active');
      itemBox[l].classList.add('hide');

      if(itemBox[l].getAttribute('data-item')== dataFilter){
          itemBox[l].classList.remove('hide');
          itemBox[l].classList.add('is-active');
      }
    }
  })
}

const TypeWriter = function(txtElement, words, wait = 1000){
  this.txtElement = txtElement;
  this.words= words;
  this.txt='';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

TypeWriter.prototype.type= function(){
  //Current index of word
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];

  //Check if deleting
  if(this.isDeleting){
    this.txt = fullTxt.substring(0, this.txt.length -1);
  } else {
    // Add char
    this.txt =fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;


  setTimeout(() => this.type(), 170)
}

// Init On Dom Load

document.addEventListener('DOMContentLoaded', init);

//Init App
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait');
  //Init TypeWriter
  new TypeWriter(txtElement, words, wait);

}


$(window).on("load", function () {
  $(".loader").fadeOut(2000);
  $(".main-content").fadeIn(5000);
});

$(document).ready(function () {
  $("#name")
    .on("change", function () {
      $(".data").hide();
      $("#" + $(this).val()).fadeIn(700);
    })
    .change();
});

const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);

darkmode.showWidget();




const email = document.getElementById('email');
const bookForm = document.getElementById('book-form');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'booking-container error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'booking-container success';
}


function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Event listeners
bookForm.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email]);
 
  checkEmail(email);
  
});


       AOS.init();
     




