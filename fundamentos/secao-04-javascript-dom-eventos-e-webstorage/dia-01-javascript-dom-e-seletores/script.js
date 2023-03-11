let head = document.querySelector('header');
let sideLeft = document.querySelector('.emergency-tasks');
let sideRight = document.querySelector('.no-emergency-tasks');
let leftTags = document.getElementsByClassName('urgent-tags');
let rightTags = document.getElementsByClassName('no-urgent-tags');
let footer = document.getElementById("footer-container");

head.style.backgroundColor = 'green';
sideLeft.style.backgroundColor = 'orange';
sideRight.style.backgroundColor = 'yellow';
leftTags[0].style.backgroundColor = 'purple';
leftTags[1].style.backgroundColor = 'purple';
rightTags[0].style.backgroundColor = 'black';
rightTags[1].style.backgroundColor = 'black';
footer.style.backgroundColor = 'green';


