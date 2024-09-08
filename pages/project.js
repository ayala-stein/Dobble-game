var arr1=["../images/1/drackon_1.png","../images/1/fire_1.png","../images/2/led_2.png","../images/3/kaktus_3.png","../images/3/seasors_3.png","../images/1/tree_1.png","../images/1/sun_1.png","../images/2/ogen_2.png"];
var arr2=["../images/2/horse_2.png","../images/2/kaktus_2.png","../images/1/cat_1.png","../images/1/kria_1.png","../images/3/dolphin_3.png","../images/3/tamrur_3.png","../images/2/zebra_2.png","../images/1/candle_1.png"];
var arr3=["../images/3/cat_3.png","../images/3/clock_1.png","../images/3/heart_3.png","../images/2/ketem_2.png","../images/1/led_1.png","../images/1/turtule_1.png","../images/2/solider_2.png","../images/3/flower_3.png"];
var arr4=["../images/3/iglu_3.png","../images/2/moon_2.png","../images/2/seasors_2.png","../images/1/solider_1.png","../images/3/kria_3.png","../images/3/apple_3.png","../images/2/snow_2.png","../images/1/red_lieve_1.png"];
var arr5=["../images/1/moon_1.png","../images/2/heart_2.png","../images/2/dog_2.png","../images/1/zebra_1.png","../images/3/bottle_3.png","../images/3/cube_3.png","../images/3/ogen_3.png","../images/1/pzaza_1.png"];
var arr6=["../images/1/sol_1.png","../images/3/glasses_3.png","../images/3/yello_cheese_3.png","../images/3/moon_3.png","../images/2/drackon_2.png","../images/2/head_2.png","../images/2/cat_2.png","../images/1/dino_1.png"];
var arr7=["../images/3/sol_3.png","../images/2/candle_2.png","../images/2/clock_2.png","../images/3/fire_3.png","../images/3/question_3.png","../images/1/goal_1.png","../images/1/dog_1.png","../images/2/apple_2.png"];
var arr8=["../images/3/dog_3.png","../images/3/manul_3.png","../images/2/iglu_2.png","../images/3/drackon_3.png","../images/2/turtule_2.png","../images/1/lightning_1.png","../images/3/man_3.png","../images/1/horse_1.png"];
var arr9=["../images/3/goal_3.png","../images/2/refaim_2.png","../images/1/kurim_1.png","../images/3/sun_3.png","../images/1/iglu_1.png","../images/1/head_1.png","../images/2/flower_2.png","../images/3/zebra_3.png"];
var arr10=["../images/1/glasses_1.png","../images/1/kaktus_1.png","../images/3/key_3.png","../images/3/clock_1.png","../images/2/iglu_2.png","../images/3/chipush_3.png","../images/2/greenleaf_2.png","../images/3/pzaza_3.png"];

var cards=[arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10];
let card1;
let card2;
let lastCard1="../images/1/drackon_1.png";
let lastCard2="../images/1/drackon_1.png";
function putPictures() {
    let i;
    do {
      card1 = Math.trunc(Math.random() * 10);
      card2 = Math.trunc(Math.random() * 10);
    } while (card1 == card2||card1==lastCard1||card2==lastCard2);
    lastCard1=card1;
    lastCard2=card2;
    for (i = 0; i < 8; i++) {
        let cardElement = document.getElementById("c" + (i + 1));
        cardElement.style.backgroundImage = `url(${cards[card1][i]})`;
    }
    for (i = 0; i < 8; i++) {
        let cardElement = document.getElementById("c" + (i + 9));
        cardElement.style.backgroundImage = `url(${cards[card2][i]})`;
    }
  }

  let score=0;
  function check(c)
  {
    let level=localStorage.getItem("level");
    let cnt=0;
    let i;
    let img=document.getElementById(c).style.backgroundImage;
    img=img.slice(16);
    img=img.slice(0, -7);
    for(i=0;i<cards[card1].length;i++)
    {
        if((cards[card1])[i].includes(img))
        cnt++;
        if((cards[card2])[i].includes(img))
        cnt++;
    }
    if(cnt==2&&seconds>=0){
      if(level==1)
      seconds=11;
      else if(level==2)
      seconds=8;
      else
      seconds=6;
      putPictures();
      score+=10;
      document.getElementById("score").innerHTML="your score is: "+score;
    }
    else{
      seconds=0;
      gameOver();
    }
  }

  let seconds=localStorage.getItem("seconds");
  var level;
  let userName;
  
  function deflevel(x){
    userName=document.getElementById("userName").value;
    localStorage.setItem("userName",userName);
      if(x==1){
        
        localStorage.setItem("level",1);
        localStorage.setItem("seconds",11);
      }
      else if(x==2){
        
        localStorage.setItem("level",2);
        localStorage.setItem("seconds",8);
      }
      else{
        
        localStorage.setItem("level",3);
        localStorage.setItem("seconds",6);
      }
      window.location.href="go.html";
  }

  let seconds2=4;
  function updateTimer2(){
    if(seconds2>=-1)
    seconds2--;
    if(seconds2<=0){
      document.getElementById("timer2").style.fontSize="550px";
      document.getElementById("timer2").style.left="450px";
      document.getElementById("timer2").style.top="5px";
      document.getElementById("timer2").innerHTML="go!";
    }
    else 
    document.getElementById("timer2").innerHTML=seconds2;
    if(seconds2==-1)
      window.location.href="game.html";
  }

  function updateTimer(){
    
      var elements = document.getElementsByClassName("timerStyle");
      for (var i = 0; i < elements.length; i++) {
          elements[i].style.color = "black";
      }
    if(seconds>=-1)
       seconds--;
    if(seconds==-1){
      gameOver();
      return;
    }
    if(seconds>9)
    document.getElementById("timer").innerHTML="00:"+seconds;
    else if(seconds>=0)
    document.getElementById("timer").innerHTML="00:0"+seconds;
    if (seconds <3) {
      var elements = document.getElementsByClassName("timerStyle");
      for (var i = 0; i < elements.length; i++) {
          elements[i].style.color = "red";
      }
  }
  }

  let timer = setInterval(updateTimer, 1000);
  let timer2 = setInterval(updateTimer2, 1000);

  function gameOver() {
    document.getElementById("darkbackgroung_gameOver").style.display = "unset";
    let userName=localStorage["userName"];
    document.getElementById("messageScore").innerHTML=userName+", your score is: "+score ;
}


