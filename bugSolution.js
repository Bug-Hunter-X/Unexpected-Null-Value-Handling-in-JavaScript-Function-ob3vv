function foo(a, b) {
  // Explicit null checks for both arguments
  if (a === null || b === null) {
    return null; // Return null if either input is null
  }
  return a + b; // Return sum if both inputs are valid
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined,5)); //Output: NaN
//This improved solution now also handles undefined values.