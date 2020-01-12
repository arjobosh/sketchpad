var default_squares = 16;
setup_grid(default_squares);

// grid setup
function setup_grid(num_squares) {
  const grid = document.querySelector('#grid');

  var total_squares = num_squares * num_squares;
  var grid_width = screen.width * 0.3;
  var cell_size = (grid_width / num_squares).toString();
  var temp = '';

  for(i = 0; i < num_squares; i++){
    temp += cell_size + 'px ';
  }

  grid.style.display = 'grid';
  grid.style.width = grid_width.toString() + 'px';
  grid.style.margin = 'auto';
  grid.style.justifyContent = 'center';
  grid.style.gridTemplateColumns = temp;
  grid.style.gridTemplateRows = temp;

  // cell style
  for(i = 0; i < total_squares; i++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.height = cell_size + 'px';
    cell.style.width = cell_size + 'px';
    cell.style.backgroundColor = 'green';
    cell.style.borderStyle = 'solid';
    cell.style.borderWidth = '1px';
    cell.style.borderColor = 'black';
    grid.appendChild(cell);
  }
}
const reset_btn = document.querySelector('#reset');
const cells = document.querySelectorAll('.cell');
const set_squares_btn = document.querySelector('#set-squares');

// reset button function
reset_btn.onclick = function() {
  for(i = 0; i < cells.length; i++){
    cells[i].style.backgroundColor = 'white';
  }
};

// set squares button
set_squares_btn.onclick = function () {
  var squares = prompt("enter the number of squares on each side", "16");
  setup_grid(squares);
};




/*
cells.forEach((cell) => cell.addEventListener('mousemove',
  function() {
    cell.style.backgroundColor = 'red';
  }));

const options = document.querySelector('#options');

function clear_canvas(){

}*/
