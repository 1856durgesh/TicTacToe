let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('.reset')


// turn of the player 
let turn0=true;

// storing all the winning pattern in a 2d arrays 
const winPattern= [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8]
 
]

// adding the event listerener on each of the boxes 
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box is clicked");
    if(turn0){ // player o
      box.innerText="O";
      turn0=false;
    }
    else{ /// player x 
      box.innerText="X";
      turn0=true
    }
    // now disable the button so that that value an not be changed again
    box.disabled=true;

    // at every press of the button  check winner 
    checkWinnner();
  })
})

// creating the function for checking the winner 
const checkWinnner=()=>{
  for( let pattern of winPattern){
    // console.log(pattern[0],pattern[1],pattern[2]); //it gives all the winning pattenr
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
      if(pos1Val===pos2Val && pos2Val==pos3Val){
        console.log("Winner is "+pos1Val)
        showWinner(pos1Val);        
      }
    }
  }
}

const disableBoxes=()=>{
  for(box of boxes){
    box.disabled=true;
  }
}

const enableBoxes=()=>{
  for(box of boxes){
    box.disabled=false;
  }
}

const showWinner=(winner)=>{
  let result=`Congratulation! ${winner} You are winner`;
  document.getElementById('msg').innerText=result;
  document.getElementById('msg').style.color=" rgb(212, 41, 41)"
  disableBoxes();
}

// now start the new game 
const funNewGame=()=>{
  enableBoxes();
  turn0=true;
  for(box of boxes){
    box.innerText="";
  }
  let result="Winner is?.....";
  document.getElementById('msg').innerText=result;
  document.getElementById('msg').style.color="black"
}

// now adding the event listerener on the new game button 
let newGame=document.getElementById('reset');
newGame.addEventListener('click',()=>{
  funNewGame();
})


