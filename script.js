// Create a grid of 16x16 divs

let container = document.querySelector('#container');
let squareSize = 16;
let button = document.querySelector('#button');

newSketcher(squareSize);

button.addEventListener('click', (e) => {
squareSize = prompt('What\'s the desired square size? (Max: 100)')
newSketcher(squareSize)

});




function newSketcher(squareSize){

      let allPanels = document.querySelectorAll('.panel');
      allPanels.forEach(element => {
      container.removeChild(element)
      });

      let panelSize = (800/squareSize);

      for (i=1; i<=squareSize*squareSize; i++){
            let newPanel = document.createElement('div');
            container.appendChild(newPanel);
            newPanel.classList.add('panel');
            newPanel.style.cssText = (`width: ${800/squareSize}px; height: ${800/squareSize}px`);
      }
}

