//create variables
var targetNumber = 0;
var numberOptions = [1, 3, 7, 10];
var playerTotal = 0;
var wins = 0;
var losses = 0;
var blue = $("#bluegem");
var red = $("#redgem");
var purple = $("#purplegem");
var green = $("#greengem");

function startGame(){

    $("#mastertotal").show().animate({
        opacity: '1'}, 3000);
    
    $("#smoke").show().animate({
        opacity: '0'}, 2000);

    playerTotal = 0;
    $("#usertotal").text("Your current total is: " + playerTotal);

    targetNumber = Math.floor((Math.random()*120)+19);
    $("#mastertotal").text("The magic total is... " + targetNumber);

    blue = numberOptions[Math.floor(Math.random()*numberOptions.length)];
    red = numberOptions[Math.floor(Math.random()*numberOptions.length)];
    purple = numberOptions[Math.floor(Math.random()*numberOptions.length)];
    green = numberOptions[Math.floor(Math.random()*numberOptions.length)];

    console.log(blue);
}

function gemClicks(){

    $("#bluegem").on("click", function() {
        playerTotal += blue;
    
        $("#usertotal").text("Your current total is: " + playerTotal);
    
        console.log(blue);
        console.log(playerTotal);
    
        roundOver();
        });

    $("#redgem").on("click", function() {
        playerTotal += red;
    
        $("#usertotal").text("Your current total is: " + playerTotal);
    
        console.log(red);
        console.log(playerTotal);
    
        roundOver();
        });
    
    $("#greengem").on("click", function() {
        playerTotal += green;
        
        $("#usertotal").text("Your current total is: " + playerTotal);
        
        console.log(green);
        console.log(playerTotal);
        
        roundOver();
        }); 

    $("#purplegem").on("click", function() {
        playerTotal += purple;
            
        $("#usertotal").text("Your current total is: " + playerTotal);
            
        console.log(purple);
        console.log(playerTotal);
            
        roundOver();
        });           
    }

function roundOver(){

    if (playerTotal > targetNumber){
        losses++;
        alert("Sorry, you lost!!");
        $("#losses").text("Total losses: " + losses)
        startGame();
    }
    
    else if(playerTotal === targetNumber){
        wins++;
        alert("You Win!!!");
        $("#wins").text("Total wins: " + wins);
        startGame();
    }  
}

startGame();
gemClicks();