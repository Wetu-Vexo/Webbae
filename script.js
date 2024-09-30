const button = document.getElementById('mybutton');
const display = document.getElementById('quote_display');
const word = [
    "Bong Slanh Oun",
    "My love for you is the same as the size of Oggy's house; it's infinite.",
    "Have a good day oun somlanh",
    "Khernh tomhom jit bong ort",
    "Would you still love me if I were a worm?/nIf you were a worm, I'd be your early bird because I'll always get you.",
    "Believe you can and you're halfway there.",
 
]

// Add an event listener to the button
button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * word.length);
    display.textContent = word[randomIndex];
});