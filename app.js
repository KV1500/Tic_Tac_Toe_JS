
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new_btn");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");




let turn0 = true;

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    turn0 = true;
    inableBoxes();
    msg_container.classList.add("hide");
}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clcicked");
        if(turn0){
            box.innerText ="O";
            turn0 = false;
        }else{
            box.innerText ="X";
            turn0 = true;
        }
        box.ariaDisabled = true;

        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const inableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}


const showwinner =(winner) =>{
    MessageChannel.innerText = `BHAIII ${winner} Jinkla na`;
    msg_container.classList.remove("hide");
    disableBoxes();
}

const checkWinner =()=>{
    for(let pattern of winpattern){
        let pos1val1 = boxes[pattern[0]].innerText;
        let pos1val2 = boxes[pattern[1]].innerText;
        let pos1val3 = boxes[pattern[2]].innerText;

        if(pos1val1 !="" && pos1val2 !="" && pos1val3 !=""){
            if(pos1val1=== pos1val2&& pos1val2===pos1val3){
                console.log("JINKLO NA BHAAIII",pos1val1);
                showwinner(pos1val1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click", resetgame)