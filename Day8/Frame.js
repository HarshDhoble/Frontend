const frame = document.querySelector('.frame');
for (let id=1; id <= 400; id++){
  let block = document.createElement('div');
  block.setAttribute('class','block');
  block.setAttribute('id', id);
  block.setAttribute('class', 'clicked');
  block.addEventListener('click',() => {
      block.classList.toggle('clicked');
  });
  frame.appendChild(block);
}