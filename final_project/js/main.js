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

/*
Changing Image Opacity
*/

let images = document.querySelectorAll('img');
// console.log(images);

// the amount of image selectors has to be exact with the amount of images or else it wont work
function changeOpacity() {
  images[0].style.opacity = '0.5'; // change opacity of each image
  images[1].style.opacity = '0.5';
  images[2].style.opacity = '0.5';
  images[3].style.opacity = '0.5';
  images[4].style.opacity = '0.5';
  images[5].style.opacity = '0.5';
  images[6].style.opacity = '0.5';
  images[7].style.opacity = '0.5'; // change opacity of each image
  images[8].style.opacity = '0.5';
  images[9].style.opacity = '0.5';
  images[10].style.opacity = '0.5';
  images[11].style.opacity = '0.5';
  images[12].style.opacity = '0.5';
  images[13].style.opacity = '0.5';
  images[14].style.opacity = '0.5';


  this.style.opacity = '1'; // keep current image opaque
  // in event handlers, "this" refers to the HTML element that received the event
  // console.log(this);
}

function resetOpacity() {
  images[0].style.opacity = '1'; // reset opacity of each image
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
  images[3].style.opacity = '1';
  images[4].style.opacity = '1';
  images[5].style.opacity = '1';
  images[6].style.opacity = '1';
  images[7].style.opacity = '1'; 
  images[8].style.opacity = '1';
  images[9].style.opacity = '1';
  images[10].style.opacity = '1';
  images[11].style.opacity = '1';
  images[12].style.opacity = '1';
  images[13].style.opacity = '1';
  images[14].style.opacity = '1';
}

// event listeners for hover on
images[0].addEventListener('mouseover', changeOpacity);
images[1].addEventListener('mouseover', changeOpacity);
images[2].addEventListener('mouseover', changeOpacity);
images[3].addEventListener('mouseover', changeOpacity);
images[4].addEventListener('mouseover', changeOpacity);
images[5].addEventListener('mouseover', changeOpacity);
images[6].addEventListener('mouseover', changeOpacity);
images[7].addEventListener('mouseover', changeOpacity);
images[8].addEventListener('mouseover', changeOpacity);
images[9].addEventListener('mouseover', changeOpacity);
images[10].addEventListener('mouseover', changeOpacity);
images[11].addEventListener('mouseover', changeOpacity);
images[12].addEventListener('mouseover', changeOpacity);
images[13].addEventListener('mouseover', changeOpacity);
images[14].addEventListener('mouseover', changeOpacity);

// event listeners for hover off
images[0].addEventListener('mouseout', resetOpacity);
images[1].addEventListener('mouseout', resetOpacity);
images[2].addEventListener('mouseout', resetOpacity);
images[3].addEventListener('mouseout', resetOpacity);
images[4].addEventListener('mouseout', resetOpacity);
images[5].addEventListener('mouseout', resetOpacity);
images[6].addEventListener('mouseout', resetOpacity);
images[7].addEventListener('mouseout', resetOpacity);
images[8].addEventListener('mouseout', resetOpacity);
images[9].addEventListener('mouseout', resetOpacity);
images[10].addEventListener('mouseout', resetOpacity);
images[12].addEventListener('mouseout', resetOpacity);
images[13].addEventListener('mouseout', resetOpacity);
images[14].addEventListener('mouseout', resetOpacity);
