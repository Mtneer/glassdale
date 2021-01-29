
import { useCriminals, getCriminals} from './CriminalsProvider.js'
import { criminal } from './criminal.js'

export const CriminalList = (filter) => {
    let criminalTarget = document.querySelector(".info-container")
    let criminalHTML = ""

    getCriminals().then(() => {
        let criminals = useCriminals();
        const convictingOfficers = criminals.map(perp => {return perp.arrestingOfficer})
        const crimes = criminals.map(perp => { return perp.conviction})
        
        if (filter) {
            if (crimes.includes(filter)) {
                criminals = criminals.filter(perp => {return perp.conviction === filter})
            } else if (convictingOfficers.includes(filter)) {
                criminals = criminals.filter(perp => {return perp.arrestingOfficer === filter})
            }
        }

        criminals.forEach(perp => criminalHTML += criminal(perp))
        
        criminalTarget.innerHTML = `<h2>Criminals</h2><div class="criminal-list flex-container">${criminalHTML}</div>`;
    })
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
