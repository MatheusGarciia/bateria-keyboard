let buttons = document.querySelectorAll('.drum')


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', handleClick)
}

function handleClick(){
    let audio = new Audio('sounds/tom-1.mp3')
    audio.play()
}