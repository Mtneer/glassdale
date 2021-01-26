import { } from './criminals/criminalList.js'
import { } from './officers/officerList.js'
import { } from './facility/facilityList.js'

const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked
    // Select the entire body tag
  const bodyElement = document.querySelector("body")

  // Add a class
  bodyElement.classList.toggle("dark-background")
})