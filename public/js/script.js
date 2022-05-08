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

// edit profile
function edituserprofile() {
  const endpoint = `/api/user/editempprofile`;
  const fn = document.querySelector('#firstname').value;
  const ln = document.querySelector('#lastname').value;
  const un = document.querySelector('#username').value;
  const data = { firstname: fn, lastname: ln, username: un }
  if (fn == '' && ln == '' && un == '') {
    let err = "No changes made";
    let el = document.querySelector("#editprofile p.error");
    el.style.display = 'block';
    el.innerHTML = err;
  } else {
    fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) =>
        window.location.href = data.redirect
      )
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
function editreturn() {
  window.location.href = '/home';
}

//delete account
function deleteAccount() {
  if (confirm('Are you sure you want to delete your account?')) {
    const endpoint = `/api/user/deleteaccount`;
    fetch(endpoint, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => window.location.href = data.redirect)
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

//project filter
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

//about scroll
// function aboutScroll(){
//   document.getElementById('about').scrollIntoView();
// }

//timesheet entry
function fillTimesheet() {
  const endpoint = `/api/timesheet/addefforts`;
  const day = document.querySelector('#working_day').value;
  const efforts = document.querySelector('#efforts').value;
  const comment = document.querySelector('#timeentry_comment').value;
  const data = { day: day, efforts: efforts, comment: comment }

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      // window.location.href = data.redirect
      let msg = document.querySelector('.entrymsg');
      msg.style.display = 'flex';
      msg.innerHTML = '<p>' + data.message + '</p>';
      document.querySelector('#working_day').value = '';
      document.querySelector('#efforts').value = '';
      document.querySelector('#timeentry_comment').value = ''
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function logmsg() {
  document.querySelector('.entrymsg').style.display = 'none';
}

// Goals 

var goalInfo = {
  "Project Goals": [
    "Number of reusable components developed",
    "Post project delivery bug ratio",
    "Certification",
    "Trainings attended",
    "Number of leaves taken",
    "Customer appreciations(if any)"
  ],
  "Attributes": [
    "Communication",
    "Team Work",
    "Leadership",
    "Problem-solving abilities"
  ]
}

if (window.location.pathname == "/annual-performance") {
  window.onload = function () {
    var type = document.getElementById("goaltype");
    var name = document.getElementById("goalname");

    for (var gt in goalInfo) {
      type.options[type.options.length] = new Option(gt, gt);
    }

    type.onchange = function () {
      name.length = 1;
      if (this.selectedIndex < 1)
        return;
      var gn = goalInfo[this.value];
      for (var i = 0; i < gn.length; i++) {
        name.options[name.options.length] = new Option(gn[i], gn[i]);
      }
    }
  }
}

function add_comments() {
  const endpoint = `/api/goal/addcomments`;
  const goaltype = document.querySelector('#goaltype').value;
  const goalname = document.querySelector('#goalname').value;
  const comment = document.querySelector('#goal-comment').value;
  const data = { goaltype: goaltype, goalname: goalname, comment: comment }

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = data.redirect
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}