var theNum;

function setup() {
   theNum=int(random(100));
  createP("Number Guessing Game");
  //DOM=document object model
  canvas = createCanvas(600,600);
  canvas.position(100,40);
   background(200);
   
   //input box
  greeting = createElement('h2', 'Please guess a number between 1 and 100.');
  greeting.position(150,100);
  
  slider=createSlider(0,100,50);
  slider.position(150,200);
  
  
  //buttons
  button = createButton('submit');
  button.position(slider.x + slider.width+5, 200);
  button.mousePressed(answer);
  
  whereToPrintAnswer=createElement("h1","");
  whereToPrintAnswer.position(150,250);
  text(theNum,20,20);
 
}

function draw() {
   /*
   background(200);
   var name=input.value();
   text(name,30,30);
   text(slider.value(),30,60);
   */
   
  
}

function answer(){
   background(200);
   //read input box
   var theGuess=slider.value();
   if (theGuess>theNum){
      whereToPrintAnswer.html("Go Lower")} else {
          whereToPrintAnswer.html("Go Higher");
      }
      if (theGuess==theNum){
         whereToPrintAnswer.html("Right: the answer is "+theNum);
      }
}
   
   
   
