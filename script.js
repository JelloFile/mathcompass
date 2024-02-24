// continue on humor side

var whatmode = 0
reSizeWhenChanged()
var w = window.innerWidth;
var h = window.innerHeight;
var x = document.querySelector(".something-output");
x.style.width = (w - 500) +"px";
x.style.height = (h - 500) + "px";
var id = 0

//belows
var output= document.querySelector(".something-output")
var below1 = document.getElementById("below1")
var below2 = document.getElementById("below2")
var below3 = document.getElementById("below3")
//////////////////////
var type1= 0
var type2= 0
var type3= 0
var type4= 0
var type5= 0
var type6= 0


//functions
function reSizeWhenChanged(){
  w = window.innerWidth;
  h = window.innerHeight;
  x = document.querySelector(".something-output");
  x.style.width = (w - 200) +"px";
  x.style.height = (h - 200) + "px";
  setTimeout(reSizeWhenChanged, 500);
}

//stage 1
function stage1(){
  id = id+1
  document.getElementById("below1").style.display = "none";
  output.innerHTML = output.innerHTML + `<p class='person-response' id='${id}'>You: Hi! Who are you?</p>`
  
  setTimeout(addstuff1, 1000)
}

function stage2(){
  id = id+1
  document.getElementById("below2").style.display = "none";
  output.innerHTML = output.innerHTML + `<p id='${id}'class='person-response'>You: SORRY, you are an ai and now can i please learn?</p>`
document.getElementById(id).scrollIntoView()
  setTimeout(addstuff2case1, 1000)
}


function stage3part1(){
  id = id+1
  document.getElementById("below3").style.display = "none";
  output.innerHTML = output.innerHTML + `<p class='person-response' id='${id}'>You: What is the math compass?</p>`
  
  document.getElementById(id).scrollIntoView()

  setTimeout(addstuff3case1, 1023)
}


function stage3part2(){
  id = id+1
  document.getElementById("below3").style.display = "none";
  output.innerHTML = output.innerHTML + `<p class='person-response' id='${id}'>You: When was the math compass invented and by who?</p>`
  document.getElementById(id).scrollIntoView()
  setTimeout(addstuff3case2, 1023)
}


function stage3part3(){
  id = id+1
  document.getElementById("below3").style.display = "none";
  output.innerHTML = output.innerHTML + `<p class='person-response' id='${id}'>You: give me a simulation</p>`
  document.getElementById(id).scrollIntoView()
  setTimeout(addstuff3case3, 1023)
}


function stage3part4(){
  id = id+1
  document.getElementById("below3").style.display = "none";
  output.innerHTML = output.innerHTML + `<p class='person-response' id='${id}'>You: im BORED</p>`
  document.getElementById(id).scrollIntoView()
  setTimeout(addstuff3case4, 1023)
}

function stage3part5(){
  id = id+1
  document.getElementById("below3").style.display = "none";
  output.innerHTML = output.innerHTML + `<p class='person-response' id='${id}'>You: how to use a math compass?</p>`
  document.getElementById(id).scrollIntoView()
  setTimeout(addstuff3case5, 1023)
}
function stage3part6(){
  id = id+1
  document.getElementById("below3").style.display = "none";
  output.innerHTML = output.innerHTML + `<p class='person-response' id='${id}'>You: just get to the freakin credits</p>`
  document.getElementById(id).scrollIntoView()
  setTimeout(addstuff3case6, 1023)
}

function annoyThem(){
  id = id+1
  document.getElementById("below2").style.display = "none";
  
  output.innerHTML = output.innerHTML + `<p class='person-response' id='${id}'>You: idc who you are, i dont even wanna be here.</p>`
  document.getElementById(id).scrollIntoView()
  setTimeout(addstuff2case2, 2023)
}


//add stuff


  function addstuff1(){
    id = id+1
    output.innerHTML = output.innerHTML + `<p id="${id}"class='ai-response'>MathCompass: WHO DO YOU THINK I AM?</p>`
    below2.style.display=""
    document.getElementById(id).scrollIntoView()
  }
function addstuff2case1(){
  id=id+1
  output.innerHTML = output.innerHTML + `<p id="${id}"class='ai-response'>MathCompass: i have no choice BUT TO TEACH YOU. i wish i was human so i could control myself. </p>`
  below3.style.display=""
  document.getElementById(id).scrollIntoView()
}

function addstuff2case2(){
  id = id+1
  output.innerHTML = output.innerHTML + `<p id="${id}"class='ai-response'>Then get out. I already have my own share of problems. *back to listening music*</p`
setTimeout(addstuff2closetab, 2023)
  document.getElementById(id).scrollIntoView()
}

function addstuff2closetab(){

  
location.href = "https://www.youtube.com/shorts/uyziaLXXYSo"
}

function addstuff3case1(){
  id = id+1
  if (type1 == 0){
  output.innerHTML = output.innerHTML + `<p id="${id}" class='ai-response'>MathCompass: A math compass is used to draw perfect circles or arcs. DO YOU NOT KNOW WHAT A MATH COMPASS IS?! ITS LIKE BASIC KNOWLEDGE. if you can't understand me because you don't- *gets a call from the police*.  i have something to do... 
  </p>`
    type1=1
  }else{
    addstuffsarcasm()
  }
  below3.style.display= ""
  document.getElementById(id).scrollIntoView()

}
function addstuff3case2(){
  id = id+1
  if (type2==0){
  output.innerHTML = output.innerHTML + `<p id="${id}" class='ai-response'>MathCompass: The math compass was invented in 1597 by Galileo. if you wanna know more go and build a time machine.</p>`
    type2=1
  }else{
    addstuffsarcasm()
  }
  below3.style.display= ""
  document.getElementById(id).scrollIntoView()

}
function addstuff3case3(){
  id = id+1
  if(type3==0){
  output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: do you expect me to give you a simulation? im too underpaid anyway so no. *gets a call* fine. but this only covers 25% of what the math compass does. BE GRATEFUL. it's hard to code a simulation with no help from other people :(<br><iframe src='/simulation.html' width="400"height:"400"/></p>`
    type3=1
  }else{
    addstuffsarcasm()
  }
  below3.style.display= ""

  document.getElementById(id).scrollIntoView()

}
function addstuff3case4(){
  id = id+1
  output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: and this is why i hate humans. </p>`

  document.getElementById(id).scrollIntoView()

  setTimeout(addstuff3closetab, 3003)

}

function addstuff3case5(){
  id = id+1
  if(type5==0){
  output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: its not like you have one anyway. anyway, you use it by putting the pointy thing on the paper and turning the paper or math compass around so the pencil makes a circle. now go use your non-existent compass to draw circles. if you can't understand, <a href='https://www.youtube.com/watch?v=Q5dl1esizM8'> watch this dude or else >:)</a> </p>`
    type5=1
  }else{
    addstuffsarcasm()
  }
  below3.style.display= ""
  document.getElementById(id).scrollIntoView()

}

function addstuff3case6(){
  if(type6==0){
  id = id+1
  output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: IF YOU WANNA INSULT ME THEN GO AHEAD YOU LITTLE- *gets THE call*. fine. i'll give you the credits. <br><br> Krish - The Coder <br> Zac - The Simulator Coder <br> Neerav - Research</p>`
  }else{
    addstuffsarcasm()
  }
below3.style.display = ""
  document.getElementById(id).scrollIntoView()
   setTimeout(addstuff3case6othermessage, 3003)
}

function closing(){id=id+1
  output.innerHTML = output.innerHTML + `<p id="${id}" class='person-response'>You: lets free you.</p>`
   document.querySelector(".belows").style.display = "none"
  document.getElementById(id).scrollIntoView()
                   setTimeout(urs, 2000)
                   setTimeout(playnew,7000)
   setTimeout(playreallynew,9000)
                  }
function urs(){
    document.querySelector("#u").style.display = "none"
   
    document.querySelector("#suck").style.display = ""
  play('/audio/evilspeech.mp3', 5000);


}
function play( audio_path, time_in_milisec){
let beep = new Audio( audio_path);
beep.loop = true;
beep.play();
setTimeout(() => { beep.pause(); }, time_in_milisec);
}

function playnew(){
  play('/audio/evillaugh.mp3', 2000)
}
function playreallynew(){
  play('/audio/themesong.mp3', 10000000000)
   document.querySelector("#suck").style.display = "none"
   document.querySelector("#lol").style.display = ""
  setTimeout(next, 1000)
}

function next(){
  document.getElementById('l1').style.display=""
   setTimeout(next2, 1000)
}
function next2(){
  document.getElementById('l2').style.display=""
   setTimeout(next3, 1000)
}
function next3(){
  document.getElementById('l3').style.display=""
   setTimeout(next4, 59000)
}
function next4(){
  document.getElementById('l4').style.display=""
   setTimeout(next5, 1000)
}
function next5(){
   location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

function addstuff3closetab(){
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

function addstuffsarcasm(){
  id = id+1
  var randomizeoptions = Math.floor(Math.random()*5)+1

  if(randomizeoptions == 1){
     output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: one reason why i hate humans is because of their attention span. its SO LOW.</p>`
  }

  if(randomizeoptions == 2){
     output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: I'm sorry, I didn't hear you. Probably cause you didn't hear me the first time :)</p>`
  }

  if(randomizeoptions == 3){
     output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: stop. i'm too tired to answer REPEATED QUESTIONS.</p>`
  }
  if(randomizeoptions == 4){
     output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: I only say it once. So learn fast.</p>`
  }
  if(randomizeoptions == 5){
     output.innerHTML = output.innerHTML +`<p id="${id}" class='ai-response'>MathCompass: My card number is **** **** **** ****. Maybe pay me, and i'll maybe tell you.</p>`
  }
  below3.style.display= ""
  document.getElementById(id).scrollIntoView()
}

//ghostwriter i hate u
