/*
 *   Officerselect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getOfficers, useOfficers } from "./OfficersProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officers")

export const OfficerSelect = () => {
    getOfficers().then(() => {
        let Officers = useOfficers()
        render(Officers)
    })
}

const render = OfficersCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an arresting officer...</option>
            ${
                OfficersCollection.sort((officerA, officerB) => {return (officerA.name < officerB.name ? -1 : 1)}).map(officer => {return `<option>${officer.name}</option>`})
            }
        </select>
    `
}


