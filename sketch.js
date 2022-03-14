const sketch = document.querySelector('#pad');
for (let j = 0; j < 16; j ++){
    const row = document.createElement('div');
    row.classList.add('row');
    sketch.appendChild(row);
    for (let i = 0; i < 16; i ++) {
        const grid = document.createElement('div'); 
        grid.classList.add('grid');
        row.appendChild(grid);
    };
};

const squares = document.querySelectorAll('div.grid');
squares.forEach((square) => {
  square.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = pen(clr);
  });
});

function reset() {
    while (sketch.firstChild) {
    sketch.removeChild(sketch.firstChild);
    };

    let size = window.prompt('How many squares per side for your new grid?');
    if (size <= 100){
        for (let l = 0; l < size; l++) {
            const row = document.createElement('div');
            row.classList.add('row');
            sketch.appendChild(row);
            for (let k = 0; k < size; k++) {
                const grid = document.createElement('div'); 
                grid.classList.add('grid');
                row.appendChild(grid);
            };
        }
    } else {
        alert('Please input a number no larger than 100.')
    };

    const newones = document.querySelectorAll('div.grid')
    newones.forEach((new1) => {
        new1.addEventListener('mouseover', function(event) {
          event.target.style.backgroundColor = pen(clr);
        });
      });
}


function randomColor() {
    let randomHex = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomHex}`; 
}

let clr;
function pen(clr) {
    if (clr == 'black') {
        return('black');
    } else if (clr == 'random') {
        return (randomColor());
    } else {
        return('#ED553B');
    };
}

const blackp = document.querySelector('#blackPen');
blackp.addEventListener('click', () => {
    clr = 'black';
});

const colorp = document.querySelector('#randomPen');
colorp.addEventListener('click', () => { 
    clr = 'random';
    const squares = document.querySelectorAll('div.grid');
    squares.forEach((square) => {
    square.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = pen(clr);
      });
    });
});
