const div = document.querySelector('#container');

function row() {
    const row = document.createElement('div');
    row.classList.add('row');
    div.appendChild(row);

    for (let i = 0; i < 16; i ++) {
        const grid = document.createElement('div');
        
        grid.classList.add('grid');
        grid.classList.add('row-item'); 
        row.appendChild(grid);
    };
}


for (let j = 0; j < 16; j ++){
    row();
};
