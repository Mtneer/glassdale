/*
 *   Officerselect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getOfficers, useOfficers } from "./OfficersProvider.js"
import { CriminalList } from '../criminals/criminalList.js'

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officers")

export const OfficerSelect = () => {
    getOfficers().then(() => {
        let Officers = useOfficers()
        render(Officers)
    })
}

const render = OfficersCollection => {
    
    const alphabeticalOfficers = OfficersCollection.map(officer => { return officer.name}).sort()

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an arresting officer...</option>
            ${
                alphabeticalOfficers.map(officer => {return `<option>${officer}</option>`})
            }
        </select>
    `
}


