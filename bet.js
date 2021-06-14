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



  var player= document.getElementById("inputId").value;
  if(num1==player){
    showMessage();
    
  }
  else{
    hidemsg()
  }

  // function animateValue(obj, start, end, duration) {
  //   let startTimestamp = null;
  //   const step = (timestamp) => {
  //     if (!startTimestamp) startTimestamp = timestamp;
  //     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  //     obj.innerHTML = Math.floor(progress * (end - start) + start);
  //     if (progress < 1) {
  //       window.requestAnimationFrame(step);
  //     }
  //   };
  //   window.requestAnimationFrame(step);
  // }
  
  // const obj = document.getElementById("value");
  // animateValue(obj, 100, 0, 5000);

  // var animate_no = document.getElementById("item1");
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

//   var animess= document.querySelector('.itemer');
//   var num= {
//     charged: '0',
//     cycles: '120'
//   }

//   anime({
//     targets: num,
//     charged: '100%',
//     cycles: 130,
//     round: 1,

//     value: [0, 100],
//     duration: 3000,
    
//   easing: 'linear',
//     direction: 'alternate',
//     loop: true,
//      update: function() {
//      animess.innerHTML.JSON.stringfy(num1);
      
//      },
// });
