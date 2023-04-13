import $ from 'jquery';
import './styles.scss';

// Finds the element with the id of main
// and changes the content to 'Here we go!'

let num = 0;
setInterval(() => {
  $('#main').html(`You've been on this page for ${num} seconds.`);
  num += 1;
}, 1000);
