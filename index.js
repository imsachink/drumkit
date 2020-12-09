for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            sound(this.innerHTML);
            animation(this.innerHTML);
    });
    
}
document.addEventListener("keydown",function(event){
    sound(event.key);
    animation(event.key);
});

function sound(a){
    
    
    switch (a){
        case "k":var audio = new Audio('sounds/crash.mp3');
                audio.play(); break;
        case "l": var audio = new Audio('sounds/kick-bass.mp3');
                audio.play(); break;
        case "j": var audio = new Audio('sounds/snare.mp3');
                audio.play(); break;
        case "w": var audio = new Audio('sounds/tom-1.mp3');
                audio.play(); break;
        case "a": var audio = new Audio('sounds/tom-2.mp3');
                audio.play(); break;
        case "s": var audio = new Audio('sounds/tom-3.mp3');
                audio.play(); break;
        case "d": var audio = new Audio('sounds/tom-4.mp3');
                audio.play(); break;

        default: console.log(a);

                            }
    }

function animation(a){
        document.querySelector("."+a).classList.add("pressed");

        setTimeout(function(){document.querySelector("."+a).classList.remove("pressed");},100);

}
