// Create a grid of 16x16 divs

let container = document.querySelector('#container');

for (i=1; i<=16*16; i++){
      let panel = document.createElement('div');
      container.appendChild(panel);
      panel.classList.add('panel');
}