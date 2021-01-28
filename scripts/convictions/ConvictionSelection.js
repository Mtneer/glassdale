/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionsProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions().then(() => {
        let convictions = useConvictions()
        render(convictions)
    })
}

const render = convictionsCollection => {
 
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.sort((crimeA, crimeB) => {return (crimeA.name < crimeB.name ? -1 : 1)}).map(crime => {return `<option>${crime.name}</option>`})
            }
        </select>
    `
}

// convictionsCollection.map(crime => { return crime.name }).sort().map(crime => {return `<option>${crime}</option>`})