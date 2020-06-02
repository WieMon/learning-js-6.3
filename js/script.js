const names = [];
const div = document.querySelector('div');

const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  const newName = input.value;

  if(input.value.length) {
    for (name of names) {
      if (name === newName)
      alert('It has been already added!');
      return
    }
    names.push(newName);
    div.textContent += newName + ', ';
    input.value = '';
  }
 
}

document.querySelector('button').addEventListener('click', addName);