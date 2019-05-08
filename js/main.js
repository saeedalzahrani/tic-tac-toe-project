//we have some jquery code to clicked every box with value x or o .
// and if statement to select who is winner x or o or no one.
let go = "X";
$("#base tr th").click(function() {
    if(go==="X"){
        $(this).text(go)
        $(this).off()
            go="O" }
    else{
         $(this).text(go)
         $(this).off()
            go="X"
        }; 
    if (winner()) { 
        if (winner()=="X") {setTimeout(function(){ alert("Player X win"); }, 100);$('.cell').off()}
        else if (winner()=="O") {setTimeout(function(){ alert("Player O win"); }, 100);$('.cell').off()}
        else {setTimeout(function(){ alert("Try Agine"); }, 100);$('.cell').off()}    
    }   
});
// all code under this commit it's for check value in every box 
//if  have same  value player(x or o) will be  winner.
function winner(){    
    let box1 = $("#base tr:nth-child(1) th:nth-child(1)").text();
    let box2 = $("#base tr:nth-child(1) th:nth-child(2)").text();
    let box3 = $("#base tr:nth-child(1) th:nth-child(3)").text();
    let box4 = $("#base tr:nth-child(2) th:nth-child(1)").text();
    let box5 = $("#base tr:nth-child(2) th:nth-child(2)").text();
    let box6 = $("#base tr:nth-child(2) th:nth-child(3)").text();
    let box7 = $("#base tr:nth-child(3) th:nth-child(1)").text();
    let box8 = $("#base tr:nth-child(3) th:nth-child(2)").text();
    let box9 = $("#base tr:nth-child(3) th:nth-child(3)").text();
    if((box1===box2)&&(box2===box3) && box2){return box3;}
    else if((box4===box5)&&(box5===box6) && box5){return box6;}
    else if((box7===box8)&&(box8===box9) && box8 ){return box9;}
    else if((box1===box4)&&(box4===box7) && box4){return box7;}
    else if((box2===box5)&&(box5===box8) && box8){return box8;}
    else if((box3===box6)&&(box6===box9) && (box3)){return box9;}
    else if((box1===box5)&&(box5===box9) && box5){return box9;}
    else if((box3===box5)&&(box5===box7) && box5){return box7;}
    else if(box1&&box2&&box3&&box4&&box5&&box6&&box7&&box8&&box9){return "DRAW"}
}


