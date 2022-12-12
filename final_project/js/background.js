/*
Dark Mode for Home Page
*/

let hour = new Date().getHours(); // get current hour
// console.log(hour); // display current hour in the web console

if (hour >= 18 || hour < 6) { // between 6:00 PM and 6:00 AM
// if (hour > 6) { // testing dark mode during the day
  const background = document.querySelector('body'); // access <body> element
  background.style.backgroundColor = 'black'; // change background color to white with style object
  background.style.color = 'white'; // change default font color of all child elements to white

  const header = document.querySelector('h1 > a'); // access <a> element of main heading
  header.className = 'dark'; // apply class of "dark" (see style sheet)

  const navigation = document.querySelectorAll('nav > a'); // access <a> elements of primary navigation
  
  navigation[0].className = 'dark'; // spring
  navigation[1].className = 'dark'; // summer
  navigation[2].className = 'dark'; // fall
  navigation[3].className = 'dark'; // winter

  const footer = document.querySelector('footer > p > a') // access <a> element of footer paragraph
  footer.className = 'dark'; // apply class of "dark"
}
// if its day time
else {
  const background = document.querySelector('body'); // access <body> element
  background.style.backgroundColor = '#3F3E3E'; // change background color to lightgray with style object
  background.style.color = 'white'; // change default font color of all child elements to white

  const header = document.querySelector('h1 > a'); // access <a> element of main heading
  header.className = 'dark'; // apply class of "dark" (see style sheet)

  const navigation = document.querySelectorAll('nav > a'); // access <a> elements of primary navigation
  
  navigation[0].className = 'dark'; // spring
  navigation[1].className = 'dark'; // summer
  navigation[2].className = 'dark'; // fall
  navigation[3].className = 'dark'; // winter

  const footer = document.querySelector('footer > p > a') // access <a> element of footer paragraph
  footer.className = 'dark'; // apply class of "dark"
}
