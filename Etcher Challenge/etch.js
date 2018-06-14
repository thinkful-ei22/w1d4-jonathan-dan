'use strict'

// objectives:
// When the user hovers over a grid cell, the "active" class should be permanently applied to the cell

// When the user clicks the "Clear Grid" button, the grid should reset all cells by calling the provided createAndPlaceRows() function.

// Important: You will not need to edit any HTML/CSS for this challenge.

// Approaches
// There are several ways to complete this exercise. We'd like you to focus on two different approaches as outlined below. When you've got the 
//functionality working with the first, start a new branch and write the second implementation.

// Approach #1: Add an event listener onto every .cell that's listening for the appropriate event. Notice that since createAndPlaceRows() unbinds 
//all listeners on .cell, you need to reapply them every time it's invoked.

// Approach #2: Add a single event listener to the PARENT element of all the cells. You will need to listen for a different event and identify your 
//target differently as well. But now you don't need to worry about listeners being unbound!

// Add Event Listeners here:
function activateCell() {
  $('.grid').on('mouseover', '.cell', function() {
    console.log('string');
    $(this).addClass('active');
  });
}

function redrawGrid() {
  $('button').on('click', function() {
     createAndPlaceRows(8);
  });
}
// When DOM is ready:
$(() => {
  createAndPlaceRows(8);

  // Bind your event listeners here:
  activateCell();
  redrawGrid();
});







// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
