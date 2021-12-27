let Quest = [];  //set an array for all answers

const consPoint = document.querySelector(".consPoint")
const cons = document.querySelector(".cons")
const midPoint = document.querySelector(".midPoint")
const mid = document.querySelector(".mid")
const progPoint = document.querySelector(".progPoint")
const prog = document.querySelector(".prog")


// this function gives each of the answers 0 points
function fill() { 
 let  econPoints = 0
 let poliPoints = 0
 let socialPoints = 0
  for (let i = 0; i < 25; i++) { 
      Quest[i] = {econPoints,poliPoints,socialPoints}
    } 
// console.log(Quest)
} 


// each answer points into the array
function saver(q, econPoints, poliPoints, socialPoints) { 
    q = q-1 ; 
    Quest [q] = {econPoints,  poliPoints, socialPoints }
    console.log(Quest)
  } 
  


// this function uses the total calculated score to figure out the position of the point
function pointPosition (myScore, VeScore, socScore) { 
 
    // if for social score conservative 
    if(socScore <= 6.6){
      consPoint.style.cssText = `background-color: white;border-radius: 10px; border: 2px solid black;
      border-radius: 8px;`
      cons.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ; 
    }

     // if for social score middle, not progresist and not conservative 
     else if(socScore >= 6.6 && socScore <= 13){
      midPoint.style.cssText = `background-color: white;border-radius: 10px;
      border: 2px solid black;
    border-radius: 8px;`
      mid.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;   
    }

      // if for social score progresist 
      else if(socScore >= 13){
        progPoint.style.cssText = `background-color: white;border-radius: 10px;
        border: 2px solid black;
    border-radius: 8px;`
        prog.style.cssText = `margin-left:${myScore}em; padding-top: ${VeScore}em; ` ;
      }

} 

// ---------------------------------------------------------------------------------
//here we get the content number to display the data from the content.js file ------
function contentNumber (myScore, VeScore, socScore) { 
        // if for social score conservative |||||||||||||||||||||||||
      if(socScore <= 6.6 && myScore <= 6.5 &&  VeScore >= 13.5 ){
        contNumber = 0
        socArrow = conservador
      }

      else if(socScore <= 6.6 && myScore <= 6.5 &&  VeScore >= 6.5 &&  VeScore <= 13.5){
        contNumber = 1
        socArrow = conservador
      }
//fascismo clerical
      else if(socScore <= 6.6 && myScore <= 6.5 &&  VeScore <= 6.5 ){
        contNumber = 2
        socArrow = conservador
      }

      else if(socScore <= 6.6 && myScore >= 6.5 &&  myScore <= 13.5 && VeScore >= 13.5 ){
        contNumber = 3
        socArrow = conservador
      }

      else if(socScore <= 6.6 && myScore >= 6.5 &&  myScore <= 13.5 && VeScore >= 6.5 && VeScore <= 13.5 ){
        contNumber = 4
        socArrow = conservador
      }
//anarco conservadurismo
      else if(socScore <= 6.6 && myScore >= 6.5 &&  myScore <= 13.5 && VeScore <= 6.5 ){
        contNumber = 5
        socArrow = conservador
      }
//pinochetismo
      else if(socScore <= 6.6 && myScore >= 13.5  && VeScore >= 13.5 ){
        contNumber = 6
        socArrow = conservador
      }

      else if(socScore <= 6.6 && myScore >= 13.5  && VeScore <= 13.5 && VeScore >= 6.5  ){
        contNumber = 7
        socArrow = conservador
      }
//paleo libertarismo
      else if(socScore <= 6.6 && myScore >= 13.5  && VeScore <= 6.5  ){
        contNumber = 8
        socArrow = conservador
      }

      // if for social score middle, |||||||||||||||||||

//Marxismo clásico      
      else if(socScore >= 6 && socScore <= 13 && myScore <= 6.5 &&  VeScore >= 13.5 ){
        contNumber = 0
        socArrow = socialMiddle
      }
//Socialismo democrático
      else if(socScore >= 6 && socScore <= 13  && myScore <= 6.5 &&  VeScore >= 6.5 &&  VeScore <= 13.5){
        contNumber = 1
        socArrow = socialMiddle
      }
//Anarco colectivismo
      else if(socScore >= 6 && socScore <= 13  && myScore <= 6 &&  VeScore <= 6.5 ){
        contNumber = 2
        socArrow = socialMiddle
      }
//Fascismo clásico
      else if(socScore >= 6 && socScore <= 13 && myScore >= 6.5 &&  myScore <= 13.5 && VeScore >= 13.5 ){
        contNumber = 3
        socArrow = socialMiddle
      }
//Centro
      else if(socScore >= 6 && socScore <= 13  && myScore >= 6.5 &&  myScore <= 13.5 && VeScore >= 6.5 && VeScore <= 13.5 ){
        contNumber = 4
        socArrow = socialMiddle
      }
//mutualismo
      else if(socScore >= 6 && socScore <= 13 && myScore >= 6 &&  myScore <= 13.5 && VeScore <= 6.5 ){
        contNumber = 5
        socArrow = socialMiddle
      }
//capitalismo iliberal
      else if(socScore >= 6 && socScore <= 13  && myScore >= 13.5  && VeScore >= 13.5 ){
        contNumber = 6
        socArrow = socialMiddle
      }
//liberalismo clasico
      else if(socScore >= 6 && socScore <= 13  && myScore >= 13.5   && VeScore >= 6.5 && VeScore <= 13.5 ){
        contNumber = 7
        socArrow = socialMiddle
      }
//libertarismo
      else if(socScore >= 6 && socScore <= 13  && myScore >= 13.5  && VeScore <= 6.5  ){
        contNumber = 8
        socArrow = socialMiddle
      }

        // if for social score progresist  ||||||||||||||||||
        else if(socScore >= 13  && myScore <= 6.5 &&  VeScore >= 13.5 ){
          contNumber = 0
          socArrow = progresista
        }
  
        else if(socScore >= 13 && myScore <= 6.5 &&  VeScore >= 6.5 &&  VeScore <= 13.5){
          contNumber = 1
          socArrow = progresista
        }
  
        else if(socScore >= 13&& myScore <= 6.5 &&  VeScore <= 6.5 ){
          contNumber = 2
          socArrow = progresista
        }
  
        else if(socScore >= 13 && myScore >= 6.5 &&  myScore <= 13.5 && VeScore >= 13.5 ){
          contNumber = 3
          socArrow = progresista
        }
  
        else if(socScore >= 13 && myScore >= 6.5 &&  myScore <= 13.5 && VeScore >= 6.5 && VeScore <= 13.5 ){
          contNumber = 4
          socArrow = progresista
        }
  
        else if(socScore >= 13 && myScore >= 6 &&  myScore <= 13.5 && VeScore <= 6.5 ){
          contNumber = 5
          socArrow = progresista
        }
  
        else if(socScore >= 13 && myScore >= 13.5  && VeScore >= 13.5 ){
          contNumber = 6
          socArrow = progresista
        }
  
        else if(socScore >= 13 && myScore >= 13.5  && VeScore <= 13.5 && VeScore >= 6.5  ){
          contNumber = 7
          socArrow = progresista
        }
  
        else if(socScore >= 13 && myScore >= 13.5  && VeScore <= 6.5  ){
          contNumber = 8
          socArrow = progresista
        }

  contentDisplay(socArrow[contNumber] )
  // console.log(socScore)

}
// -------------------------------------------------------------------------


 // this function adds the number of points each answer is worth together 
function total() {  
      let myScore = 0;
      let VeScore = 0;
      let socScore = 0;

      questPoints = (Quest.map( quest => quest.econPoints));
      politicalPoints = (Quest.map( quest => quest.poliPoints));
      socialPoints = (Quest.map( quest => quest.socialPoints));

      for (let i = 0; i < 25; i++) {
           myScore = myScore + questPoints[i];
           VeScore = VeScore + politicalPoints[i];
           socScore = socScore + socialPoints[i];
        } 

        console.log(myScore, VeScore, socScore);
        pointPosition(myScore, VeScore, socScore);   
      contentNumber(myScore, VeScore, socScore);     
  
  } 

  
const chartToggle = document.querySelector('.toggle-button');
const chartToggleNew = document.querySelector('.toggle-button.new');
//display the data from the file contents.js
function contentDisplay(socArrow) { 

  document.getElementById("result").innerHTML = ` <br>  <B> ${(socArrow.name)} </B>  <br> 
 <p> ${(socArrow.description)} </p> <br>  <img src="${(socArrow.symbol)}" class="symbol" > `

 chartToggle.style.cssText = `display: inline;`
 chartToggleNew.style.cssText = `display: inline;`
} 
  


let acordion = document.querySelector(".quiz-question");
//accordeon with jquery ---------------------------------------------
$(document).ready(function() {

  function close_accordion_section() {
      $('.accordion .title').removeClass('active');
      $('.accordion .section-content').slideUp(300).removeClass('open');
  }

  $('.title').click(function(e) {
      // Grab current anchor value
      let currentAttrValue = $(this).attr('href');
      

      if($(e.target).is('.active')) {
          close_accordion_section();
      }else {
          close_accordion_section();

          // Add active class to section title
          $(this).addClass('active');
          // Open up the hidden content panel
          $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
      }

      e.preventDefault();
  });

}); 
//-------------------------------------------------------- end accordion


//Chart toggle buttonss ///////////////////////////////////////////

const toggleBtn = document.querySelector('.toggle-button');
const toggleBtnOriginal = document.querySelector('.toggle-button');
const toggleBtnNew = document.querySelector('.toggle-button.new');
const makeActive = document.querySelector('.active');

const arrows__chart= document.querySelector('.arrows__chart');
const arrows__chart2 = document.querySelector('.arrows__chart2');
const arrows__chart3 = document.querySelector('.arrows__chart3');

toggleBtnOriginal.addEventListener('click', function () {
  toggleTop();
}, false);

toggleBtnNew.addEventListener('click', function () {
  toggleBottom();
}, false);

function toggleTop () {
  toggleBtnNew.classList.remove('active');
	toggleBtnOriginal.classList.add('active');

  // consPoint.style.cssText = `background-color: white;border-radius: 10px;`
  // midPoint.style.cssText = `background-color: white;border-radius: 10px;`
  // progPoint.style.cssText = `background-color: white;border-radius: 10px;`
  arrows__chart.classList.remove('arrows__chart--new');
  arrows__chart2.classList.remove('arrows__chart2--new');
  arrows__chart3.classList.remove('arrows__chart3--new');
}

function toggleBottom () {
  toggleBtnNew.classList.add('active');
  toggleBtnOriginal.classList.remove('active');
  
  // consPoint.style.cssText = `background-color: red;border-radius: 10px;`
  // midPoint.style.cssText = `background-color: red;border-radius: 10px;`
  // progPoint.style.cssText = `background-color: red;border-radius: 10px;`
  arrows__chart.classList.add('arrows__chart--new');
  arrows__chart2.classList.add('arrows__chart2--new');
  arrows__chart3.classList.add('arrows__chart3--new');
}

////////////////////////////////////////////////////////////////////

//toggle button in the responsive ( max-width: 640px )
function toggleSidebar(){
  const box = document.getElementById('sidebar');
  box.classList.toggle("active2");
   const btn = document.getElementById('sidebar-btn');
  btn.classList.toggle("toggle");
}