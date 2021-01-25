
import { useCriminals, getCriminals} from './CriminalsProvider.js'
import { criminal } from './criminal.js'


export const CriminalList = () => {
    getCriminals().then(() => {
        let criminals = useCriminals();
        
        let criminalHTML = ""
        let criminalTarget = document.querySelector(".criminal-list")
        criminals.forEach(perp => criminalHTML += criminal(perp))
        criminalTarget.innerHTML = criminalHTML;
    })
}