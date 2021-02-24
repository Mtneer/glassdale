
import { useCriminals, getCriminals} from './CriminalsProvider.js'
import { criminal } from './criminal.js'
import { useFacility, getFacility } from '../facility/FacilityProvider.js'
import { useCriminalFacilities, getCriminalFacilities } from '../facility/CriminalFacilityProvider.js'

let criminalTarget = document.querySelector(".info-container")
let criminalHTML = ""

export const CriminalList = (filter) => {

    getFacility()
    .then(getCriminalFacilities)
    .then(() => {
        let criminals = useCriminals();
        const facilities = useFacility();
        const criminalFacilities = useCriminalFacilities();

        // Collect list of officers and crimes to be used in the dropdown filters for convicting officer and crime committed. 
        const convictingOfficers = criminals.map(perp => {return perp.arrestingOfficer})

        const crimes = criminals.map(perp => { return perp.conviction})
        
        if (filter) {
            if (crimes.includes(filter)) {
                criminals = criminals.filter(perp => {return perp.conviction === filter})
            } else if (convictingOfficers.includes(filter)) {
                criminals = criminals.filter(perp => {return perp.arrestingOfficer === filter})
            }
        }
        render(criminals, facilities, criminalFacilities)
    })

}

const render = (criminalsToRender, allFacilities, allRelationships) => {

    // Step 1 - Iterate all criminals
    criminalHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return criminal(criminalObject, facilities)
        }
    ).join("")

    criminalTarget.innerHTML = `<h2>Criminals</h2><div class="criminal-list flex-container">${criminalHTML}</div>`;

}

export const alibi = (criminalID) => {
    criminalID = parseInt(criminalID)
    let popUpTarget = document.querySelector(".modal-body"); 
    let alibiPopUpHTML = ""

    getCriminals().then(() => {
        let criminals = useCriminals();

        criminals = criminals.find(perp => {
            return (perp.id === criminalID)})

        criminals.known_associates.forEach(associate => {
            alibiPopUpHTML += ` 
                <p><strong>Name:</strong> ${associate.name}</p>
                <p><strong>Alibi:</strong> ${associate.alibi}</p>
            `
        })

        popUpTarget.innerHTML = alibiPopUpHTML

        return popUpTarget.innerHTML
    })
}
