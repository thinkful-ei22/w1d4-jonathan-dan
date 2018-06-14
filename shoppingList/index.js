'use strict'

/*Requirements
In terms of user experience, your shopping list app must allow users to:

enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
check and uncheck items on the list by clicking the "Check" button
permanently remove items from the list
Additionally:


Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
*/

$(function() {
  $('#js-shopping-list-form').submit(event => {
  event.preventDefault();
  const userText = $('.js-shopping-list-entry').val();
  $('.js-shopping-list-entry').val('');
    $('ul').append(
      `<li><span class="shopping-item">${userText}</span>
        <div class="shopping-item-controls">
       <button class="shopping-item-toggle">
        <span class="button-label">check</span>
       </button>
       <button class="shopping-item-delete">
        <span class="button-label">delete</span>
       </button></li>`);
  });
});