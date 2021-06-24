const frame = document.querySelector('.frame');
const booked = document.querySelector('.booked');
const remaining = document.querySelector('.remaining');
var b = 0, r = 36;
const book = () => {
  booked.innerHTML = "Booked Seats: " + b;
  remaining.innerHTML = "Remaining Seats: " + r;
}
book();
for (let id=1; id <= 36; id++){
  let block = document.createElement('div');
  block.setAttribute('class','block');
  block.setAttribute('id', id);
  block.addEventListener('click',() => {
    if (!block.classList.contains('clicked')){
          b+=1;
          r-=1;
      }
      else{
          b-=1;
          r+=1;
      }
      block.classList.toggle('clicked');
      book();
  });
  frame.appendChild(block);
}