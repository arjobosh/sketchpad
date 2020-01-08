const grid = document.querySelector('#grid');

grid.style.display = 'flex';
grid.style.margin = 'auto';
grid.style.width = '672px';
grid.style.flexWrap = 'wrap';
grid.style.alignItems = 'center';
grid.style.justifyContent = 'center';

var square_size = 16;
var total_squares = square_size * square_size;

for(i = 0; i < square_size; i++){
  for(j = 0; j < square_size; j++){
    const cell = document.createElement('div');
    cell.style.height = '40px';
    cell.style.width = '40px';
    cell.style.backgroundColor = 'blue';
    cell.style.borderStyle = 'solid';
    cell.style.borderWidth = '1px';
    cell.style.borderColor = 'black';
    //cell.style.float = 'left';
    grid.appendChild(cell);
  }
}
