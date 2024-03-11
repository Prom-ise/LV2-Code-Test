const greetingsElement = document.querySelector('.greetings');
const greetingsText = [
  "By signing up, you're taking the first step towards unlocking a world of productivity and organization.",
  "Let's embark on this journey together and make every task count.",
  "Start by creating your account and let's begin organizing your life!"
];
let currentSentence = 0;
let typed = 0;

const typeWriter = () => {
  if (typed < greetingsText[currentSentence].length) {
    greetingsElement.textContent = greetingsText[currentSentence].substring(0, typed + 1);
    typed++;
    setTimeout(typeWriter, 20);
  } else {
    typed = 0;
    currentSentence = (currentSentence + 1) % greetingsText.length;
    setTimeout(typeWriter, 2500);
  }
};

typeWriter();

document.getElementById('show')
document.getElementById('todoBox')
 const openWork = () => {
  show.style.display = 'none'
  todoBox.style.display = 'block'
 }