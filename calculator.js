var numNode;
var screen;
var operatorNode;
var equation = '';
var number;
var zero;
var decimal;
var del;
var clr;
var result;

var screen = document.getElementById('screen');

var numNode = document.querySelectorAll('.num');

// Handle adding number from 1-9 to screen when button is pressed
for (var i = 0; i < numNode.length; i++) {
  numNode[i].addEventListener('click', function(event) {
    event.preventDefault();
    number = this.value;
    equation += number;
    output = screen.setAttribute('value', equation);
  });
}

// Handle adding 0 to screen when button is pressed
document.querySelector('.zero').addEventListener('click', function(event) {
  event.preventDefault();
  zero = this.value;
  if (equation === '') {
    equation = '';
    output = screen.setAttribute('value', equation);
  } else {
    equation += zero;
    output = screen.setAttribute('value', equation);
  }
})

// Handle decimals to screen when button is pressed
document.querySelector('.period').addEventListener('click', function(event) {
  event.preventDefault();
  period = this.value;
  if (equation === '') {
    equation += '0.';
    output = screen.setAttribute('value', equation);
  } else if (equation.indexOf('.') > -1 ) {
    equation += '';
    output = screen.setAttribute('value', equation);
  } else {
    equation += period;
    output = screen.setAttribute('value', equation);
  }
});

// Handle adding operators to screen when button is pressed
var operatorNode = document.querySelectorAll('.operators');
for (var i = 0; i < operatorNode.length; i++) {
  operatorNode[i].addEventListener('click', function(event) {
    event.preventDefault();
    operator = ' ' + this.value + ' ';
    if (equation === '') {
      equation = '';
      output = screen.setAttribute('value', equation);
    } else if (['+', '-', 'x', '/'].indexOf(equation[equation.length - 1]) > -1) {
      equation = equation.replace(equation[equation.length-1], operator);
      output = screen.setAttribute('value', equation);
    } else {
      equation += operator;
      output = screen.setAttribute('value', equation);
    }
  });
}

document.querySelector('.delete').addEventListener('click', function(event) {
  event.preventDefault();
  del = this.value;
  equation = equation.replace(equation[equation.length-1], del);
  output = screen.setAttribute('value', equation);
});

document.querySelector('.clear').addEventListener('click', function(event) {
  event.preventDefault();
  equation = '';
  output = screen.removeAttribute('value');
});

document.querySelector('.equal').addEventListener('click', function(event) {
  event.preventDefault();
  equation = equation.replace(/x/g, '*');
  result = eval(equation);
  output = screen.setAttribute('value', result);
  equation = result;
});

//fix the eval output and what happens next.  if a number is clicked it should
//reset the result if it is an operator it should concatenate the output
