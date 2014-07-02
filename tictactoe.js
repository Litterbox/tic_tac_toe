document.addEventListener("DOMContentLoaded", function() {

  // Notes:
  // Use variables when defining functions
  //
  // Use a table rather than divs.  Boarders will be easier to style

  var cells = document.querySelectorAll('.cell');
  var turnCount = 0;

  function clearCells() {
  
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
    }

    turnCount = 0;
  }

  function isAlreadyClicked(target) {
    return (target.innerHTML === 'X' || target.innerHTML === 'O');
  }

  function cellClicked(target) {
    if (!isAlreadyClicked(target)) {
      if (turnCount % 2 === 0) {
        target.innerHTML = 'X';
      } else {
        target.innerHTML = 'O';
      }
      turnCount++;  
    }
    
  }

  function initGame() {
    for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function(event) {
        cellClicked(event.currentTarget);
      });
    }

    var clearButton = document.getElementById('clear_button');
    clearButton.addEventListener("click", function(event) {
      event.preventDefault();
      clearCells();
    })

    clearCells();
  }

  initGame();

});