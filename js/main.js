function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function validate(input) {
  var email = input.getAttribute("value");


  if (validateEmail(email)) {
    input.style.borderColor = "#C42121";
  } else {
    input.style.borderColor = "#EADEDB";
  }
  return false;
}

var contactForm = document.getElementById("letter");

if (contactForm !== null) {
  contactForm.addEventListener("submit", submitting); 
}

function submitting(event) {
  event.preventDefault();

  isValid = true;

  var inputName = $('#letter input[type="text"]:first-of-type').val();
  var inputEmail = $('#letter input[type="email"]').val();
  var inputSubject = $('#letter input[type="text"]:last').val();
  var inputMessage = $("#letter textarea").val();

    if (inputName.length === 0 || inputEmail.length === 0 || inputSubject.length === 0 || inputMessage.length === 0) {
      isValid = false;
    }


  if (isValid) {
    contactForm.submit();
  }
}

// M E N U

function openMenu(open) {
  var menu = document.getElementById('menu');

  open.classList.toggle("menu-open");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// G A L L E R Y

var gallery = $("#gallery");
if (gallery !== null) {
  slider();
}

function slider() {
  var pictureFrame = $("#gallery .picture").css("top");
  var counter = 0;

  if (pictureFrame == "-2400px") {
    counter = 0;
    pictureFrame = counter;
  }
  if (pictureFrame !== "-2400px") {
    counter -=600;
    pictureFrame = counter + "px";
  }

  setTimeout(slider, 1000);
}