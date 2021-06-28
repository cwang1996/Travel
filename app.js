let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.pictures');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const tabcontent = document.querySelectorAll('.tabcontent');
const tablinks = document.querySelectorAll('.tablinks');
let i;

function openCity(evt, cityName) {
  for(i = 0; i<tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  for(i = 0; i<tablinks.length; i++) {
    tablinks[i].className.replace(' active','');
  }

  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const responsenav = document.querySelector('.responsenav');
const sidebar = document.querySelector('.sidebar');
const bg = document.querySelector('.background');

responsenav.addEventListener('click', function(){
  sidebar.classList.toggle('sidebar-active');
  responsenav.classList.toggle('responsenav-active');
  bg.classList.toggle('background-active');
});
