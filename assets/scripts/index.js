'use strict'

/*
  Tools and Automation
  Josh Gable

  Assignment 4
*/

const dropdownBtn = document.querySelector('.dropdown')
const navbar = document.querySelector('.navbar')

dropdownBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
