"use strict";

let slides = document.getElementsByClassName("cards-t");
let dots = document.getElementsByClassName("fa-comment");

let slideNumber = 0;

let timer = 0;
const interval = 5000;

let slideWrap = document.getElementById("wrap-t");
let p;
function init() {
  slide();

  someSlide();

  //slideWrap.addEventListener("mouseenter", handleMouseEnter);
}
// let toggle = false;
// function handleMouseEnter2(obj) {
//   console.log("mouseenter");
//   console.log(event);
//   window.clearInterval(timer);
//   // p = slideWrap.getElementsByTagName('p')[0];
//   obj.style.fontWeight = 'bolder';
//   toggle = true;
// }

// function handleMouseOut2(obj) {
//   if(!toggle) {return;}
//   console.log("mouseout");
//   console.log(event);
//   timer = window.setInterval(someSlide, interval);
//   obj.style.fontWeight='initial';
//   toggle = false;
// }

// function handleMouseEnter(event) {
//   console.log("mouseenter");
//   console.log(event);
//   window.clearInterval(timer);
//   slideWrap.addEventListener("mouseout", handleMouseOut);
//   p = slideWrap.getElementsByTagName('p')[0];
//   p.style.fontWeight = 'bolder';
// }

// function handleMouseOut(event) {
//   console.log("mouseout");
//   console.log(event);
//   timer = window.setInterval(someSlide, interval);
//   slideWrap.removeEventListener('mouseout',handleMouseOut);
//   p.style.fontWeight='initial';
// }

function slide() {
  timer = window.setInterval(someSlide, interval);
  console.log(timer);
}

function someSlide() {
  for (let i = 0; i < slides.length; i++) {
    if (i == slideNumber) {
      slides[i].style.animationName = "fadeIn";
      dots[i].className = "fas fa-comment active";
    } else {
      // slides[i].style.animationPlayState='paused';
      slides[i].style.animationName = "fadeOut";
      dots[i].className = "fas fa-comment";
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

  if (slideNumber == 3) {
    slideNumber = 0;
  }
}

function slideOnClick(index) {
  //console.log(obj);
  window.clearInterval(timer);

  slideNumber = index;

  for (let i = 0; i < slides.length; i++) {
    if (i == slideNumber) {
      slides[i].style.animationName = "fadeIn";
      dots[i].className = "fas fa-comment active";
    } else {
      // slides[i].style.animationPlayState='paused';
      slides[i].style.animationName = "fadeOut";
      dots[i].className = "fas fa-comment";
    }
  }

  slideNumber++;

  if (slideNumber == 3) {
    slideNumber = 0;
  }

  timer = window.setInterval(someSlide, interval);
}

init();

// function test() {
//   let p = document.querySelector("p[data-p-id]");
//   p.style.overflow = "hidden";

//   var myHeaders = new Headers();

//   myHeaders.append("accept", "text/plain");
//   myHeaders.append("method", "get");

//   var myRequest2 = new Request(
//     "https://filesamples.com/samples/document/txt/sample3.txt"
//   );

//   var myRequest = new Request("https://fiddle.jshell.net/robots.txt");
//   fetch(myRequest, { mode: "no-cors" }).then(function (response) {
//     console.log(response);
//     return response.text().then(function (text) {
//       console.log(text);
//       p.style.overflow = "hidden";
//       p.style.height = "300px";
//       p.textContent = text;
//     });
//   });

//   fetch("https://api.github.com/users/manishmshiva", {
//     method: "GET",
//   })
//     .then((response) => {
//       console.log(
//         response.text().then(function (text) {
//           console.log(text);
//         })
//       );
//     })
//     .catch((err) => {
//       console.error(err);
//     });

//   Promise.all([
//     fetch("https://fiddle.jshell.net/robots.txt", {
//       mode: "no-cors",
//     }).then((x) => x.text()),
//     fetch("js/test.txt").then((x) => x.text()),
//   ]).then(([sampleResp, sample2Resp]) => {
//     console.log(sampleResp);
//     console.log(sample2Resp);
//   });

//   var url = "https://fiddle.jshell.net/robots.txt";
//   var storedText;

//   fetch(url, {
//     headers: {
//       method: "POST",
//       contentType: "text/plain",
//       accept: "text/plain",
//     },
//   }).then(function (response) {
//     response.text().then(function (text) {
//       storedText = text;
//       done();
//     });
//   });

//   function done() {
//     document.querySelector("p[data-p-id]").textContent =
//       "Here's what I got! \n" + storedText;
//   }
// }

// test();
