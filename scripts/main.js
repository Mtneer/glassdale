import { getCriminals, useCriminals } from './criminals/CriminalsProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelection.js'
import { OfficerSelect } from './officers/OfficerSelection.js'
import { } from './eventHub.js'
import { } from './navModule.js'

getCriminals()

ConvictionSelect() 
OfficerSelect()

const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked
    // Select the entire body tag
  const bodyElement = document.querySelector("body")

  // Add a class
  bodyElement.classList.toggle("dark-background")
})

