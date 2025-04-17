
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 = true;
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}




boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turn0){
            box.innerText="O";
       
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;

        checkWinner();
        });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>
{
    for(let pattern of win)
        {
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

if(pos1val != "" && pos2val != "" && pos3val != "")
{
    if(pos1val === pos2val && pos2val === pos3val)
{
console.log("winner", pos1val);

showWinner(pos1val);
}}}};


newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




// let newbtn = document.createElement("button");
// newbtn.innerText="Change the BG color";

// let a = document.querySelector("body");
// a.prepend(newbtn);

// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";

// let curMode = "Light"

// newbtn.addEventListener ("click", () => {
//     if(curMode==="Light")
//     {
//         curMode = " Dark";
//         a.style.backgroundColor = "black";
//         a.style.color ="white"
//     }
//     else{
//         curMode = "Light";
//         a.style.backgroundColor = "white";
//          a.style.color ="black"
//     }
//     console.log(curMode);
// })

// let para = document.createElement("p");
// para.innerText = "THIS IS MY WEBSITE";

// let b = document.querySelector("button");
// b.after(para);

// // newbtn.onclick = () =>
// // {
// //     console.log("You Clicked the Button");
    
// //     console.log("You Clicked the Button - 2")

// //     alert("hey whatsupp!");
// // };


// // let store = () => {
// //     console.log("You Clicked the Button");
    
// //     console.log("You Clicked the Button - 2")

// //     alert("hey whatsupp!");
// //     }

// //     newbtn.addEventListener("click",store);



// // let para = document.createElement("p");
// // para.innerText = "Touch me & see the Magic!"

// // let b = document.querySelector("button");
// // b.after(para);

// // para.style.backgroundColor = "lavender";

// // para.onmouseover = () =>
// // {
// //     console.log("I Showed up");
// // }
// // let n = document.querySelector("p"); 
// // let x =n.classList.add("newClass");
// //getAttribute

