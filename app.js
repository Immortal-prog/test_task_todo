var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');

function createListElement() {
  var li = document.createElement('li');
  li.append(input.value);
  ul.append(li);

  function crossOut() {
    li.classList.toggle('done');
  }

  li.addEventListener('click', crossOut);

  var dBtn = document.createElement('button');

  dBtn.append('X');
  li.append(dBtn);
  function deleteListItem() {
    li.remove();
  }
  dBtn.addEventListener('click', deleteListItem);
}

function addListAfterClick() {
  if (input.value === '') {
    return;
  } else {
    createListElement();
    input.value = '';
  }
}

function addListAfterKeypress(event) {
  if (event.key === 'Enter' && input.value !== '') {
    createListElement();
    input.value = '';
  } else {
    return;
  }
}

enterButton.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);
