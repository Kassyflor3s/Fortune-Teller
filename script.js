const fortunes = [
    "Luck is the residue of design.",
    "Skill comes from diligence.",
    "Pleasures await you by the sea.",
    "Ignore previous fortunes.",
    "You create your own stage and you audience is waiting.",
    "Laugh long, loud, and often.",
    "The stat of riches is shining on you",
    "If you don't like the fortune don't eat the cookie.",
    "You will be hungry again in 10 minutes.",
    "Love will come soon"
];


document.getElementById('fortuneButton').addEventListener('click', function() {
   
const randomIndex = Math.floor(Math.random() * fortunes.length);
const selectedFortune = fortunes[randomIndex];

document.getElementById('fortune').textContent = selectedFortune;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('fortune').textContent = "Click the button for your fortune.";
});