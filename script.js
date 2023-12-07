let container = document.querySelector('#container');
let squareSize = 16;
let button = document.querySelector('#button');

newSketcher(squareSize);

button.addEventListener('click', (e) => {
squareSize = prompt('What\'s the desired square size? (Max: 100)', squareSize)
newSketcher(squareSize)


});

function newSketcher(squareSize){

      let allPanels = document.querySelectorAll('.panel');
      allPanels.forEach(element => {
      container.removeChild(element)
      });

      let panelSize = (800/squareSize);

      for (let i=1; i<=squareSize*squareSize; i++){
            let newPanel = document.createElement('div');
            container.appendChild(newPanel);
            newPanel.classList.add('panel');
            newPanel.setAttribute('style', `width: ${800/squareSize}px; height: ${800/squareSize}px`);
            newPanel.addEventListener('mouseover', () => {
                  panelTracker(newPanel);
            });

            /* newPanel.style.cssText = (`width: ${800/squareSize}px; height: ${800/squareSize}px`)*/
      }


}

function panelTracker(panel){
      
      let rgb = [(Math.random()*255), (Math.random()*255), (Math.random()*255)];
      panel.style.backgroundColor = (`rgb(${rgb.join(', ')})`);
      /* panel.style.cssText = `background-color: rgb(${rgb.join(', ')}` */
}
