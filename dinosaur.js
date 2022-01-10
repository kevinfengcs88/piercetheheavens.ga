var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if (character.classList.contains("animate")){return}
    
    character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate")
    }, 500);
}
var count = 0;
var score = 0;

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    count++;
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
        block.style.animation = "none";
        block.style.display = "none";
        count = 0;
        clearInterval(checkDead);
        alert("YOU LOST");
    }
    else if (count % 100 == 0){
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}, 10);