let user=0;
let comp=0;
 const seclect=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userScore=document.querySelector("#user-score");
 const compScore=document.querySelector("#comp-score");
 const drawgame=()=>{
    console.log("Drawgame");
    msg.innerText="Drawgame";
    msg.style.backgroundColor="black";
 }
 const showWinner=(userwin,userchoice,comchoice)=>
 {
    if(userwin){
        user++;
        userScore.innerText=user;
        console.log("Congratulation: You Win!");
        msg.innerText=`You Win! Your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor="Green";
    }else{
        comp++;
        compScore.innerText=comp;
        console.log("Bad luck: You Lose!");
        msg.innerText=`You Lose! ${comchoice} beats ${userchoice}`;
        msg.style.backgroundColor="Red";
    }
 }
 const Gencomchoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const rdmidx=Math.floor(Math.random() * 3);
    return options[rdmidx];

 }
 const playGame =(userchoice)=>
 {
    console.log("user choice= ",userchoice);
    const comchoice=Gencomchoice();
    console.log("Comp choice= ",comchoice);
    if(userchoice === comchoice)
    {
        drawgame();
    }else{
        let userwin=true;
        if(userchoice === "Rock"){
           userwin= comchoice ==="Paper" ? false:true;
        }else if(userchoice ==="Paper"){
           userwin= comchoice === "Scissor" ? false : true;
        }else{
            userwin=comchoice ==="Rock" ? false : true;
        }
        showWinner(userwin,userchoice,comchoice);
    }
 }
seclect.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        console.log("Choice was clicked.",userchoice);
        playGame(userchoice);

    })

})