/*
 *   CriminalSelect component that renders a select HTML element
 *   which lists all criminals in the Glassdale PD API
 */
import { getCriminals, useCriminals } from "./CriminalsProvider.js"

// This <select> element will be added to the New Note Form

export const CriminalSelect = () => {
    getCriminals().then(() => {
        let criminals = useCriminals()
        // debugger
        document.querySelector("#criminalSelect").innerHTML = render(criminals)
    })
}

const render = criminalsCollection => {
 
    let innerHTML = `
        <option value="0">Please select a suspect...</option>`

    let criminalDropdownList = criminalsCollection.sort((perpA, perpB) => {return (perpA.name < perpB.name ? -1 : 1)}).map(perp => {return `<option value="${perp.id}">${perp.name}</option>`})
    
    innerHTML += `${criminalDropdownList.join("")}`

    return innerHTML
}

// convictionsCollection.map(crime => { return crime.name }).sort().map(crime => {return `<option>${crime}</option>`
// (perpA, perpB) => {return (perpA.name < perpB.name ? -1 : 1)}