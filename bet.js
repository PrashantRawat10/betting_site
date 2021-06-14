$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
    
  // Enable Carousel msgrols
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});


// To generate a random number
function random() {
  return Math.floor(Math.random()*(10-1)+1);
}

// to make the required changes when the button in cliked
function spin(){
  const item1 = document.getElementById('item1');
  // const item2 = document.getElementById('item2');
  

  const num1=random();
  // const num2=random();
  console.log(num1);
  
  // console.log(num2);

   item1.innerHTML=num1;
  // item2.innerHTML='${num2}';



 

  //  adding animation of random number
//   var animess= document.querySelector('#item1');
//   var num= {
//     Number_is: '0',
//   }

//   anime({
//     targets: num,
//     Number_is: num1,
//     round: 1,

//     value: [0, 100],
//     duration: 3000,
    
//     easing: 'linear',
//     // direction: 'alternate',
    
//      update: function() {
//      animess.innerHTML=JSON.stringify(num);
      
//      },
// });

anime({
  targets: '#item1',
  value: num1,
  speed: 5000,
  round: 1,
  easing: 'linear'
})

var player= document.getElementById("inputId").value;
if(num1==player){
  showMessage();
  
}
else{
  hidemsg();
}
}


  function showMessage() {
    var msg= document.getElementById("win-message");
    var msg_L= document.getElementById("lost-message");
    msg.style.display = 'block'
    msg_L.style.display = 'none'

    alert("Congratulations you have won");

  }
  function hidemsg() {
    var msg_L= document.getElementById("lost-message");
    var msg= document.getElementById("win-message");
    msg_L.style.display = 'block'
    msg.style.display = 'none'
    
  }

