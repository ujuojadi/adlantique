var myNav = document.querySelector('.bg-light');
window.onscroll = function () { 
    "use strict";
    if (window.scrollY >= 20){
        myNav.classList.add("nav-colored");
        myNav.classList.remove("bg-light");
    } 
    else {
        myNav.classList.add("bg-light");
        myNav.classList.remove("nav-colored");
    }
  
};

// 


// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  "Let your target audience find you", 
  "Advertise anywhere and anytime at a go",
  "Adlantique never stops working for you", 
  "More Control, Greater Results, Lower Costs",
  "The practical Alternative to business growth",
  "Flexible Advertising Plans for every business",
  
];

// Speed (in milliseconds) of typing.
var speedForward = 93, //Typing Speed100
    speedWait = 980, // Wait between typing and backspacing1000
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 23; //Backspace Speed25

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element
  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar);}, speedWait);
      
    }
    
  // If backspacing is enabled
  } else {
    
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      
      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else { 
      
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar);}, 50);
      
    }
  }
}




const menew1 = document.querySelector('.menew1');
const menew2 = document.querySelector('.menew2');
const menu1 = document.querySelector('#menu1');
const menu2 = document.querySelector('#menu2');

menew2.addEventListener('click', function(){
    menu1.classList.remove("active");
    menew1.style.backgroundColor = "white"
    menew2.style.backgroundColor = '#306DA0'
    menu2.classList.add("active", "show")
    
});

menew1.addEventListener('click', function(){
  menew2.style.backgroundColor = "white";
  menew1.style.backgroundColor = '#306DA0'
  menu1.classList.add("active");
  menu2.classList.remove("active")
  
});

// // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
// var i = 0,
//     a = 0,
//     isBackspacing = false,
//     isParagraph = false;

// // Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
// var textArray = [
//   "Let your Target Audience Find you", 
//   "Advertise anywhere and anytime at a go", 
//   "Flexible Advertising Plans for every business",
//   "Adlantique never stops working for you"
//   "More Control, Greater Results, Lower Costs",
//   "The pratcical Alternative to business growth",
// ];

// // Speed (in milliseconds) of typing.
// var speedForward = 100, //Typing Speed
//     speedWait = 1000, // Wait between typing and backspacing
//     speedBetweenLines = 1000, //Wait between first and second lines
//     speedBackspace = 25; //Backspace Speed

// //Run the loop
// typeWriter("output", textArray);

// function typeWriter(id, ar) {
//   var element = $("#" + id),
//       aString = ar[a],
//       eHeader = element.children("h1"), //Header element
//       eParagraph = element.children("p"); //Subheader element
  
//   // Determine if animation should be typing or backspacing
//   if (!isBackspacing) {
    
//     // If full string hasn't yet been typed out, continue typing
//     if (i < aString.length) {
      
//       // If character about to be typed is a pipe, switch to second line and continue.
//       if (aString.charAt(i) == "|") {
//         isParagraph = true;
//         eHeader.removeClass("cursor");
//         eParagraph.addClass("cursor");
//         i++;
//         setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
//       // If character isn't a pipe, continue typing.
//       } else {
//         // Type header or subheader depending on whether pipe has been detected
//         if (!isParagraph) {
//           eHeader.text(eHeader.text() + aString.charAt(i));
//         } else {
//           eParagraph.text(eParagraph.text() + aString.charAt(i));
//         }
//         i++;
//         setTimeout(function(){ typeWriter(id, ar); }, speedForward);
//       }
      
//     // If full string has been typed, switch to backspace mode.
//     } else if (i == aString.length) {
      
//       isBackspacing = true;
//       setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
//     }
    
//   // If backspacing is enabled
//   } else {
    
//     // If either the header or the paragraph still has text, continue backspacing
//     if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      
//       // If paragraph still has text, continue erasing, otherwise switch to the header.
//       if (eParagraph.text().length > 0) {
//         eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
//       } else if (eHeader.text().length > 0) {
//         eParagraph.removeClass("cursor");
//         eHeader.addClass("cursor");
//         eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
//       }
//       setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
//     // If neither head or paragraph still has text, switch to next quote in array and start typing.
//     } else { 
      
//       isBackspacing = false;
//       i = 0;
//       isParagraph = false;
//       a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
//       setTimeout(function(){ typeWriter(id, ar); }, 50);
      
//     }
//   }
// }

