//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

var x = 5;

function double(num) {
  var x = 0;
  var x = num * 2;
  return x;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):
(function() {
   var x = 5;
   function double(num) {
     var x = num * 2;
     return x;
  }
  double(6);
  console.log('The value of x is:', x, 'It should be 5.');
}) ();//made all code within own function to not pollute global namespace;

//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  var i = 0;
  for ( i ; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

console.log(typeof(i)); // should be 'undefined', not 3
//typeof will declare what type is the variable, it is undefined so it will
//print undefined due to i now being local not global.
//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.
// it is encabsulated by brackets therfore, it is being manibulated locally
//to that function not outside the brackets to the modify the decalration
// of line 5 which is outside the brackets(global).
function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
