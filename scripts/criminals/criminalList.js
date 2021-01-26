
import { useCriminals, getCriminals} from './CriminalsProvider.js'
import { criminal } from './criminal.js'


const CriminalList = () => {
    getCriminals().then(() => {
        let criminals = useCriminals();
        
        let criminalHTML = ""
        let criminalTarget = document.querySelector(".info-container")
        criminals.forEach(perp => criminalHTML += criminal(perp))
        criminalTarget.innerHTML = `<h2>Criminals</h2><div class="criminal-list flex-container">${criminalHTML}</div>`;
    })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})