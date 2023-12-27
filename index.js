const actions = [
    'shop', 
    'cook', 
    'watch movie', 
    'clean the house', 
    'eat at a restaurant', 
    'travel', 
    'go to gym'
];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const people = ['Helder', 'Kai', 'Maureen', 'Tina', 'Rachel', 'Manang', 'Melody'];


function getRandomAndRemove(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const selectedElement = array.splice(randomIndex, 1)[0];
    
    return selectedElement;
  }



function message() {
    const action = getRandomAndRemove(actions);
    const day = getRandomAndRemove(days);
    const person = getRandomAndRemove(people);


    const message = `I want to ${action} with ${person} on ${day}`

    return message;
    }

const messageGenerator = message();

console.log(messageGenerator);