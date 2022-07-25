for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var alphaGetter = this.innerHTML;
        //what 'this' does here is it take inner text of html element 
        //selected at that point of time
        makeSound(alphaGetter);
        bAnimate(alphaGetter);
    });
}
document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    bAnimate(event.key);
});
// this ()=>is another way of wirting a function

function makeSound(keY) {
    switch (keY) {
        case "w":
            var w = new Audio("sounds/tom-1.mp3");
            w.play();

            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var s = new Audio("sounds/tom-3.mp3");
            s.play();
            break;
        case "d":
            var d = new Audio("sounds/tom-4.mp3");
            d.play();
            break;
        case "j":
            var j = new Audio("sounds/snare.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("sounds/kick-bass.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio("sounds/crash.mp3");
            l.play();
            break;

    }

}

function bAnimate(current) {
    var pointer = document.querySelector("." + current);
    pointer.classList.add("pressed");

    setTimeout(() => pointer.classList.remove("pressed"), 140);
}