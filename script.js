//your JS code here. If required.
// Get output div
const output = document.getElementById("output");

// Initial array
const arr = [1, 2, 3, 4];

// Initial promise (resolves after 3 seconds)
new Promise((resolve) => {

  setTimeout(() => {
    resolve(arr);
  }, 3000);

})

.then((data) => {

  // Filter even numbers
  const evenNumbers = data.filter(num => num % 2 === 0);

  // Show after 1 second
  return new Promise((resolve) => {

    setTimeout(() => {

      output.textContent = evenNumbers.join(",");

      resolve(evenNumbers);

    }, 1000);

  });

})

.then((evenNumbers) => {

  // Multiply numbers by 2
  const multiplied = evenNumbers.map(num => num * 2);

  // Show after 2 seconds
  return new Promise(() => {

    setTimeout(() => {

      output.textContent = multiplied.join(",");

    }, 2000);

  });

});