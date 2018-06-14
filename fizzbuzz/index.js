'use strict';

const fizzBuzz = function(num) {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  return num;
};

//create tags to show in the browser

const fizzBuzzHtml = function(n) {
  let fizzClass = '';
  if (typeof n === 'string') {
    fizzClass = n;
  }
  return `<div class = 'fizz-buzz-items ${fizzClass}'><span>${n}</span</div>`;
};

console.log(fizzBuzzHtml('fizz'));

const handleSubmit = function () {
  $('#number-chooser').on('submit' , event => {
    event.preventDefault();
    const userInput = $('#number-choice').val();

    //once input is taken, reset the input box


    //take user input and evaluate that to Fizz,Buzz..
    
    const fizzBuzzItems = [];
    for (let i = 1; i <= userInput; i++) {
      fizzBuzzItems.push(fizzBuzz(i));
    }  
    const html = fizzBuzzItems.map (item => fizzBuzzHtml(item));
    $('.js-results').append(html);
    //console.log(fizzBuzzItems);
  });
};
function main() {
  handleSubmit();
}
$(main);