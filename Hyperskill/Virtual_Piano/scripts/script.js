
let white = ['A', 'S', 'D', 'F', 'G', 'H', 'J',]
let black = ['E', 'T', 'U', 'W', 'Y']
let keys = white.concat(black)

document.addEventListener("keyup", function(event){
    keys.forEach(function (key){
        if (event.code === `Key${key}`){
            let audio = document.createElement("AUDIO");
            audio.src = `music/${key}.mp3`;
            audio.play();
            console.log(`The '${key}' key is pressed.`);
        }
        else{
            console.log('Error')
        }
    });
});
