// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 1200, 'easeInOutExpo');
  return false;
});

// login-registration 

function login() {
  $('#register').css('display', 'none');
  $('#login').css('display', 'flex');
}

function register() {
  $('#register').css('display', 'flex');
  $('#login').css('display', 'none');
}

// password validation
function checkPass() {
  const pass = document.querySelector('#pass')
  const confirm_pass = document.querySelector('#confirm-pass')
  const msg = document.querySelector('.pwd-msg')
  const btn = document.querySelector('#reg-btn')
  btn.addEventListener('click', (e) => {
    if (pass.value != confirm_pass.value) {
      e.preventDefault();
      msg.style.display = "block"
    } else {
      $('#register').css('display', 'none');
      $('#login').css('display', 'flex');
    }
  })
}

$(function () {
  filterObjects('all');
});

function filterObjects(f) {
  var item, i;
  item = document.getElementsByClassName("project-item");
  if (f == "all") f = "";
  for (i = 0; i < item.length; i++) {
    removeClass(item[i], "show");
    if (item[i].className.indexOf(f) > -1) addClass(item[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Goals 
var data = Array();
var i = 0;

function add_comments() {
  var today = new Date();
  var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  var val = $('#goal-comment').val();

  if (val !== '') {
    data[i] = $('#goal-comment').val();
    i++;
    document.getElementById("goal-comment").value = "";

    var html = "<hr/>";
    for (var j = 0; j < data.length; j++) {
      html += "<div class='d-flex flex-row align-items-center commented-user'><h5 class='mr-2'>Employee Name</h5><span class='dot mb-1'></span><span class='mb-1 ml-2'>" + dateTime + "</span></div>" + data[j] + "<br/>";
    }
    document.getElementById("goal-data").innerHTML = html;

  }
}

//about scroll
// function aboutScroll(){
//   document.getElementById('about').scrollIntoView();
// }