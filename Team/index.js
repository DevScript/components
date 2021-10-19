const typeWriter = document.getElementById('typewriter-text');
const text = 'Team';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);