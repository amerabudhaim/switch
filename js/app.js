'use strict';


let slides = document.getElementsByClassName('cards-t');
let dots   = document.getElementsByClassName('fa-comment');

let slideNumber = 0;

let timer = 0;

function slide() {
   timer = window.setInterval(someSlide ,6000);
   console.log(timer);
}

function someSlide() {

 for (let i =0 ;i < slides.length ;i++) {
   if (i == slideNumber) {
      slides[i].style.animationName = 'fadeIn';
      dots[i].className='fas fa-comment active';
   } else {
      // slides[i].style.animationPlayState='paused';
      slides[i].style.animationName = 'fadeOut';
      dots[i].className='fas fa-comment';
   }
 }

//  for (let i =0 ;i < slides.length ;i++) {
//    if (i == slideNumber) {
//       // slides[i].style.animationPlayState='running';
//       // slides[i].style.animationFillMode='forwards';
//       slides[i].style.animationName = 'fadeIn';

//    } 
//  }

 slideNumber++;

 if(slideNumber == 3) {slideNumber=0;}

}

 slide();
 someSlide();

function slideOnClick(index) {
   //console.log(obj);
   window.clearInterval(timer);

   slideNumber = index;

   for (let i =0 ;i < slides.length ;i++) {
      if (i == slideNumber) {
         slides[i].style.animationName = 'fadeIn';
         dots[i].className='fas fa-comment active';
      } else {
         // slides[i].style.animationPlayState='paused';
         slides[i].style.animationName = 'fadeOut';
         dots[i].className='fas fa-comment';
      }
   }

   slideNumber++;
   
   timer = window.setInterval(someSlide ,6000);
}